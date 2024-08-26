import { Router } from "express";
const router = Router();

import {
    createHomeStudent,
    getHomeStudent,
    updateHomeStudent,
    deleteHomeStudent,
    UploadHomeStudent
  } from "../../controller/AdminController/HomeStudentcontroller.js";
  import Image from "../../middleware/HomeStudent.js";

  router.route("/createhomestudent").post(createHomeStudent);
  router.route("/gethomestudent").get(getHomeStudent);
  router.route("/updatehomestudent/:id").put(updateHomeStudent);
  router.route("/deletehomestudent/:id").delete(deleteHomeStudent);
  router.post("/Uploadhomestudent", Image, UploadHomeStudent);
export default router;
