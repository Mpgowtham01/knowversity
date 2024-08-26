import aboutusDb from "../../server/model/aboutusModel.js";

export async function aboutus(req, res, next) {
  try {
    const data = req.body;
    const details = {
      title: data.title,
      description: data.description,
      name: data.name,
      Carousel: data.Carousel,
    };
    const createaboutus = await aboutusDb.create(details);
    if (createaboutus) {
      res.status(201).json({
        message: "aboutus Created Successfully",
        data: createaboutus,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getaboutus(req, res, next) {
  try {
    const getaboutus = await aboutusDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getaboutus,
    });
  } catch (err) {
    next();
  }
}

export async function updateaboutus(req, res, next) {
  try {
    const data = req.body;
    // const id = req.params.id;
    const details = {
      title: data.title,
      description: data.description,
      name: data.name,
      Carousel: data.Carousel,
    };
    const updateaboutus = await aboutusDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "Updated successfully",
      data: updateaboutus,
    });
  } catch (err) {
    next();
  }
}

export async function deleteaboutus(req, res, next) {
  try {
    const data = req.params;
    const aboutusId = data.id;
    const aboutusDelete = await aboutusDb.findByIdAndDelete(aboutusId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: aboutusDelete,
    });
  } catch (error) {
    next();
  }
}

export async function UploadCarousel(req, res, next) {
  try {
    const path = req.file.path;
    res.status(201).json({
      message: "added successfully",
      path: path,
    });
  } catch (error) {
    next();
  }
}
