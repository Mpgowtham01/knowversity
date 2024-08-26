import { Router } from "express";
const router = Router();

import {
  userSignup,
  getList,
  updateEmployee,
  deleteEmployee,
  employerLogin,
  getListById,
  getoneUser,
  getListByStatus,
 
} from "../../controller/SignupController/employerController.js";


router.route("/Employer_create").post(userSignup);
router.route("/Employer_get").get(getList);


// router.route("/Employer_get").get( getList);
// router.route("/Employer_get").get(getList);
router.route("/Employer_get/status").get(getListByStatus);
router.route("/Employer_get/:id").get(getListById);
router.route("/Employer_getone/:id").get(getoneUser);
router.route("/Employer_update/:id").put(updateEmployee);
router.route("/Employer_delete/:id").delete(deleteEmployee);
router.route("/employer_login").post(employerLogin);

export default router;
