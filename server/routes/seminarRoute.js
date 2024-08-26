import { Router } from "express";
const router = Router();

import {
  seminarCreate,
  seminarUpdate,
  seminarDelete,
  getAllseminar,
  uploadImageSeminar,
  getoneseminar,
} from "../controller/seminarController.js";
import image from "../middleware/multer.js";

// seminars
router.route("/createSeminar").post(seminarCreate);
router.route("/getSeminar").get(getAllseminar);
router.route("/getoneseminar/:id").get(getoneseminar);
router.route("/updateSeminar/:id").put(seminarUpdate);
router.route("/deleteSeminar/:id").delete(seminarDelete);
router.post("/uploadimage", image, uploadImageSeminar);

export default router;
