import { Router } from "express";
const router = Router();

import {
  createDetails,
  updateDetails,
  deleteDetails,
  getDetails,
} from "../../controller/EmployerController/DetailsController.js";

//create Job Form
router.route("/createForm").post(createDetails);
router.route("/getForm").get(getDetails);
router.route("/updateForm/:id").put(updateDetails);
router.route("/deleteForm/:id").delete(deleteDetails);

export default router;
