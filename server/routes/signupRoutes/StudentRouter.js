import { Router } from "express";
const router = Router();

import {
  userSignup,
  getList,
  updateEmployee,
  deleteEmployee,
  uploadResume,
  getoneUser,
} from "../../controller/SignupController/SignupController.js";
import { Login } from "../../controller/loginController/LoginController.js";

import {
  checkVerifivationCode,
  deleteUserDb,
  forgetPassword,
  updatepassword,
  verifyEmail,
} from "../../controller/userController.js";
import resume from "../../middleware/multer.js";

router.route("/create").post(userSignup);
router.route("/getall").get(getList);
router.route("/student_getone/:id").get(getoneUser);
router.route("/student/user/:id/verify/:token").get(verifyEmail);
router.route("/update/:id").put(updateEmployee);
router.route("/delete/:id").delete(deleteEmployee);
router.post("/resume", resume, uploadResume);

router.post("/forget/password", forgetPassword);
router.post("/verify/password", checkVerifivationCode);
router.put("/update/password/:id", updatepassword);
router.delete("/delete/userdb/:id", deleteUserDb);

router.route("/login").post(Login);

export default router;
