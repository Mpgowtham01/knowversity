import { Router } from "express";
const router = Router();

import {
  create,
  findById,
  find,
  coursedelete,
  courseupdate,
} from "../../controller/ExamController/CourseController.js";

router.route("/create").post(create);
router.route("/get").get(find);
router.route("/getID/:id").get(findById);
router.route("/update/:id").put(courseupdate);
router.route("/delete/:id").delete(coursedelete);

export default router;
