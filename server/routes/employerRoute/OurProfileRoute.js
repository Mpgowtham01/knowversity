import { Router } from "express";
const router = Router();

import {
  createOurProfile,
  getAllProfile,
  updateOurProfile,
  deleteOurProfile,
  uploadImage,
  getListById,
  getById,
} from "../../controller/EmployerController/OurProfileController.js";
import image from "../../middleware/logoImage.js";

//our profile
router.route("/create").post(createOurProfile); 
router.route("/getAll").get(getAllProfile);
router.route("/getbyid/:id").get(getListById);
router.route("/getByIDsssss/:id").get(getById);
router.route("/update/:id").put(updateOurProfile);
router.route(`/delete/:id`).delete(deleteOurProfile);
router.post("/uploadLogo", image, uploadImage);

export default router;
