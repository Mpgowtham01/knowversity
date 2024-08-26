import { Router } from "express";
const router = Router();

import { createStudent } from "../../controller/AdminController/StudentController.js";
import { getStudent } from "../../controller/AdminController/StudentController.js";
import { createCompanymodel } from "../../controller/AdminController/StudentController.js";
import { getCompanymodel } from "../../controller/AdminController/StudentController.js";
import { createProfessionalmodel } from "../../controller/AdminController/StudentController.js";
import { getProfessionalmodel } from "../../controller/AdminController/StudentController.js";
import { createVendormodel } from "../../controller/AdminController/StudentController.js";
import { getVendormodel } from "../../controller/AdminController/StudentController.js";

router.route("/create").post(createStudent);
router.route("/getStudents").get(getStudent);

//companyroute
router.route("/createcompanymodel").post(createCompanymodel);
router.route("/getCompanymodel").get(getCompanymodel);

//professionalroute

router.route("/createProfessionalmodel").post(createProfessionalmodel);
router.route("/getProfessionalmodel").get(getProfessionalmodel);

//Vendorroute
router.route("/createVendormodel").post(createVendormodel);
router.route("/getVendormodel").get(getVendormodel)

export default router;