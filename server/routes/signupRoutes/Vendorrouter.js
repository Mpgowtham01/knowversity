import { Router } from "express";
import { getList, userLogin, userSignup,updateSingup } from "../../controller/SignupController/Vendorcontroller.js";
import { verifyEmail } from "../../controller/userController.js";
import { Login } from "../../controller/loginController/LoginController.js";
const router = Router();
 
router.route("/create").post(userSignup);
router.route("/putVendor").put(updateSingup);
router.route("/getall").get(getList);
router.route("/vendor/user/:id/verify/:token").get(verifyEmail);
router.route("/login").post(Login);


export default router;