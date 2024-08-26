import { Router } from "express";
import {
  CollegeLogin,
  deleteEmployee,
  getList,
  getListById,
  updateEmployee,
  userSignup,
  getCollage,
} from "../../controller/SignupController/CollegeController.js";
import { authenticateToken } from "../../middleware/auth.js";

const router = Router();
 
router.route("/college_create").post(userSignup);
// router.route("/college_get").get(authenticateToken, getList);
router.route("/college_get").get(getList);
router.route("/college_get/:id").get(getListById);
router.route("/college_update/:id").put(updateEmployee);
router.route("/college_delete/:id").delete(deleteEmployee);
router.route("/college_login").post(CollegeLogin);

export default router;
