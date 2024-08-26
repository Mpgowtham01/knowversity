import { Router } from "express";
const router = Router();

import {
  createJobForm,
  updateCreateJob,
  deleteCreateJob,
  getCreateJob,
  getone,
} from "../../controller/EmployerController/createJobController.js";

import {
  Approvedgetoneuser,
  deleteRequest,
  getoneuser,
  getRequest,
  JobRequest,
} from "../../controller/EmployerController/EmployerJobRequestController.js";

//create Job Form
router.route("/createForm").post(createJobForm);
router.route("/getForm").get(getCreateJob);
router.route("/getForm/:id").get(getone);
router.route("/updateForm/:id").put(updateCreateJob);
router.route("/deleteForm/:id").delete(deleteCreateJob);

router.route("/jobrequest").post(JobRequest);
router.route("/getjobrequest").get(getRequest);
router.route("/getoneJobrequest/:id").get(getoneuser);
router.route("/Approvedgetoneuser/:id").get(Approvedgetoneuser);
router.route("/requestDelete/:id").delete(deleteRequest);

export default router;
