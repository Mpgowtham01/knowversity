import { Router } from "express";
const router = Router();
import Logo from "../../middleware/Logo.js";
import {
  create,
  findById,
  find,
  Technologydelete,
  Technologyupdate,
} from "../../controller/ExamController/TechnologyController.js";

// router.post("/resume", resume, uploadResume);

router.route("/create").post(Logo, create);
router.route("/get").get(find);
router.route("/getID/:id").get(findById);
router.route("/update/:id").put(Technologyupdate);
router.route("/delete/:id").delete(Technologydelete);

export default router;
