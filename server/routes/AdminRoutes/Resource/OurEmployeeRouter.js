import { Router } from "express";
const router = Router();

import {
  OurEmployeepost,
  OurEmployeeGet,
  ourEmployeeDelete,
  updateOuEmployee,
  getoneUserOuEmployee
} from "../../../controller/AdminController/Resource/OurEmployeeController.js";

router.route("/ResourceEmployeeCreate").post(OurEmployeepost);
router.route("/GetOurEmployee").get(OurEmployeeGet);
router.route("/putOurEmployees/:id").put(updateOuEmployee)
router.route("/getoneUserOuEmployee/:id").get(getoneUserOuEmployee)
router.route("/deleteemployee/:id").delete(ourEmployeeDelete);

export default router;
