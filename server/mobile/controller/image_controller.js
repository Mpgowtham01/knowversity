import image_model from "../model/image_model.js";
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';


export async function find_images(req, res) {
  const protocol = req.protocol;
  const host = req.get("host");
  const baseUrl = `${protocol}://${host}/public/mobile_image`;

  image_model.find()
    .then((images) => {
      images.forEach((image) => {
        image.image.forEach((img) => {
          img.url = `${baseUrl}/${img.url.split('/').pop()}`;
        });
      });
      res.send(images);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occurred while retrieving images",
      });
    });
}


export async function addOrUpdateImage(req, res) {
  try {
    const fileType = req.file.mimetype;
    let imageBuffer = null;

    if (fileType === 'image/jpeg') {
      const sharpObj = sharp(req.file.path).resize(500).jpeg({ quality: 50 });
      const compressedImage = await sharpObj.toBuffer();
      imageBuffer = fileType === 'image/jpeg' || fileType === 'image/png' ? compressedImage : null;
    } else if (fileType === 'image/png') {
      const sharpObj = sharp(req.file.path).resize(500).png({ quality: 50 });
      const compressedImage = await sharpObj.toBuffer();
      imageBuffer = fileType === 'image/jpeg' || fileType === 'image/png' ? compressedImage : null;
    }

    // Write the compressed image to file
    if (imageBuffer !== null) {
      const imagePath = req.file.path;
      fs.writeFileSync(imagePath, imageBuffer);
    }

    // Build image URL
    const imageUrl = `${req.protocol}://${req.get('host')}/${req.file.path.replace(/\\/g, '/')}`;

    // Update MongoDB document
    const result = await image_model.updateOne(
      { category: req.body.category },
      { $push: { image: { title: req.body.title, url: imageUrl } } }
    );

    if (result.nModified === 0) {
      // If no document was found to update, insert a new one
      await image_model.create({
        category: req.body.category,
        image: [{ title: req.body.title, url: imageUrl }]
      });
    }

    res.status(201).json({
      message: 'Image added/updated successfully'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add/update image' });
  }
}





export async function delete_image(req, res) {
  try {
      const { category } = req.body;
      
      if (!category) {
          return res.status(400).send({
              message: "Please provide category.",
          });
      }
      
      const image = await image_model.findOne({ category });
      
      if (!image) {
          return res.status(404).send({
              message: "Image not found.",
          });
      }
      
      await image.deleteOne();
      
      res.status(204).send();
  } catch (err) {
      console.log(err);
      res.status(500).send({
          message: err.message || "Error occurred while deleting image.",
      });
  }
}