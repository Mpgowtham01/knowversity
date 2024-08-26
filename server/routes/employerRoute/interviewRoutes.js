import { Router } from "express";
const router = Router();

import {
  interviewCreate,
  getAllinterview,
//   interviewUpdate,
  interviewDelete,
} from "../../controller/EmployerController/interviewController.js";



//interview
router.route("/createinterview").post(interviewCreate);
router.route("/getAllinterview").get( getAllinterview);
// router.route("/updateinterview/:id").put(interviewUpdate);
router.route("/deleteinterview/:id").delete(interviewDelete);


export default router;