import { Router } from "express";
const router = Router();

import {
  userSignup,
  getList,
  updateEmployee,
  deleteEmployee,
  getoneUser,
} from "../../controller/SignupController/EmployersEmployeeController.js";
import { Login } from "../../controller/loginController/LoginController.js";



router.route("/employers_employee_create").post(userSignup); 
router.route("/employers_employee_getall").get(getList);
router.route("/employers_employee_getone/:id").get(getoneUser);
router.route("/employers_employee_update/:id").put(updateEmployee);
router.route("/employers_employee_delete/:id").delete(deleteEmployee);
router.route("/employers_employee_login").post(Login);

export default router;
