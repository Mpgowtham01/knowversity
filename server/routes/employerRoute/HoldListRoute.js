import { Router } from "express";
const router = Router();

import {
  createHold,
  updateHold,
  deleteHold,
  getOneHold,
} from "../../controller/EmployerController/HoldController.js";

//Hold
router.route("/createHold").post(createHold);
router.route("/getHold/:id").get(getOneHold);
router.route("/updateHold/:id").put(updateHold);
router.route("/deleteHold/:id").delete(deleteHold);

export default router;
