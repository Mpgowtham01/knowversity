import { Router } from "express";
const router = Router();

import {
  userSignup,
  getList,
  updateEmployee,
  deleteEmployee,
  instituteLogin,
  getListById,
} from "../../controller/SignupController/instituteController.js";

router.route("/institute_create").post(userSignup);

router.route("/institute_get").get(getList);
router.route("/institute_get/:id").get(getListById);
router.route("/institute_update/:id").put(updateEmployee);
router.route("/institute_delete/:id").delete(deleteEmployee);

router.route("/institute_login").post(instituteLogin);

export default router;
