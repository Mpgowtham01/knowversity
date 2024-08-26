import { Router } from "express";
const router = Router();

import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getById,
} from "../../controller/EmployerController/Courses.js";

router.route("/create/course").post(createCourse);
router.route("/getbyid/:id").get(getById);
router.route("/getAllCourse").get(getAllCourses);
router.route("/deletecourse/:id").delete(deleteCourse);

export default router;
