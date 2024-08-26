import { Router } from "express";
const router = Router();

import {
  createReject,
  updateReject,
  deleteReject,
  getOneReject,
} from "../../controller/EmployerController/RejectController.js";

//Reject
router.route("/createReject").post(createReject);
router.route("/getReject/:id").get(getOneReject);
router.route("/updateReject/:id").put(updateReject);
router.route("/deleteReject/:id").delete(deleteReject);

export default router;
