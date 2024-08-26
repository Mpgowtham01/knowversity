import { Router } from "express";
const router = Router();

import {
  createInterview,
  getInterview,
  updateInterview,
  deleteInterview,
  getOneDetails,
} from "../../controller/EmployerController/ScheduleInterviewController.js";



//interview
router.route("/createinterview").post(createInterview);
router.route("/getInterview").get( getInterview);
router.route("/getOneDetails/:id").get(getOneDetails);
router.route("/updateinterview/:id").put(updateInterview);
router.route("/deleteinterview/:id").delete(deleteInterview);


export default router;