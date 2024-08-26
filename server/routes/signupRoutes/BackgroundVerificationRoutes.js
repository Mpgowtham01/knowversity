import { Router } from "express";
import {
  BackRoundVerificationLogin,
  deleteEmployee,
  getList,
  updateEmployee,
  userSignup,
} from "../../controller/SignupController/BackgroundVerificationController.js";
import { authenticateToken } from "../../middleware/auth.js";

const router = Router();

router.route("/background_create").post(userSignup);
router.route("/background_get").get(authenticateToken, getList);
router.route("/background_update/:id").put(updateEmployee);
router.route("/background_delete/:id").delete(deleteEmployee);

router.route("/background_verification_login").post(BackRoundVerificationLogin);

export default router;
