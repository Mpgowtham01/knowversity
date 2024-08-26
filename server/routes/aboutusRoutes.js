import { Router } from "express";
const router = Router();

import {
    aboutus,
    getaboutus,
    updateaboutus,
    deleteaboutus,
    UploadCarousel
  } from "../../server/controller/aboutusController.js";
  import Image from "../middleware/Carousel.js";

  router.route("/createaboutus").post(aboutus);
  router.route("/aboutus").get(getaboutus);
  router.route("/updateaboutus/:id").put(updateaboutus);
  router.route("/deleteaboutus/:id").delete(deleteaboutus);
  router.post("/UploadCarousel", Image, UploadCarousel);
export default router;
