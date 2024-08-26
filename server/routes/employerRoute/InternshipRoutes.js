import { Router } from "express";
import {
  createInternship,
  deleteInternship,
  getInternship,
  getone,
  updateInternship,
} from "../../controller/EmployerController/Internshipcontroller.js";

const router = Router();

router.route("/createInternship").post(createInternship);
router.route("/getInternship").get(getInternship);
router.route("/getInternship/:id").get(getone);
router.route("/updateInternship/:id").put(updateInternship);
router.route("/deleteInternship/:id").delete(deleteInternship);

export default router;
