import { Router } from "express";
const router = Router();

import {
  createSelected,
  updateSelected,
  deleteSelected,
  getOneSelected,
} from "../../controller/EmployerController/SelectedController.js";

//Selected
router.route("/createSelected").post(createSelected);
router.route("/getSelected/:id").get(getOneSelected);
router.route("/updateSelected/:id").put(updateSelected);
router.route("/deleteSelected/:id").delete(deleteSelected);

export default router;
