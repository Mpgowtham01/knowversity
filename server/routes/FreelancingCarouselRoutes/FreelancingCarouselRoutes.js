import { Router } from "express";
const router = Router();

import {
  postFreelancingCarousel,
  uploadImagess,
  getCarsouselImage,
} from "../../controller/FreelancingCarouselController/FreelancingCarouselController.js";
import image from "../../middleware/AdPostMulter.js";
// import image from "../../middleware/multer.js";

router.route("/FreelancingCarouselPost").post(postFreelancingCarousel);
router.route("/FreelancingCarouselget").get(getCarsouselImage);
router.post("/FreelancingCarouselPostImage", image, uploadImagess);
export default router;
                                                                                                                                                                 
