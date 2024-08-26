import freelancingFormDB from "../../model/FreelancingCarouselModel/FreelancingCarouselModel.js";
// post
export async function postFreelancingCarousel(req, res, next) {
  try {
    const data = req.body;
    const details = {
      title: data.title,
      image: data.resume,
    };

    const createFreelancingCarousel = await freelancingFormDB.create(details);
    res.status(201).json({
      message: "FreelancingCarousel details Created Successfully",
      data: createFreelancingCarousel,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
//get
export async function getCarsouselImage(req, res, next) {
  try {
    const getCarsouselImage = await freelancingFormDB.find();
    res.status(200).json({
      message: "get successfully",
      data: getCarsouselImage,
    });
  } catch (err) {
    next();
  }
}
//image upload
export async function uploadImagess(req, res, next) {
  try {
    console.log("req.file", req.file);
    const path = req.file.path;
    res.status(201).json({
      message: "added Successfully",
      path: path,
    });
  } catch (error) {
    next();
  }
}
