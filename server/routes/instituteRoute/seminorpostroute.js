import { Router } from "express";
import {
  getAllseminar,
  seminarCreate,
  seminarDelete,
  seminarUpdate,
  uploadImage,
} from "../../controller/instituteController/Seminorpost.js";

import image from "../../middleware/multer.js";
const router = Router();

// seminars
router.route("/createSeminar").post(seminarCreate);
router.route("/getSeminar").get(getAllseminar);
router.route("/updateSeminar/:id").put(seminarUpdate);
router.route("/deleteSeminar/:id").delete(seminarDelete);
router.post("/uploadimage", image, uploadImage);

export default router;
