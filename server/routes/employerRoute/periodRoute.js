import { Router } from "express";
const router = Router();

import { 
    noticePeriodCreate,
    noticePeriodUpdate,
    noticePeriodDelete,
    getAllnoticePeriod,
  } from "../../controller/EmployerController/NoticePeriodController.js";

//   create Notice Form

router.route("/createForm").post(noticePeriodCreate);
router.route("/getForm").get(getAllnoticePeriod);
router.route("/updateForm/:id").put(noticePeriodUpdate);
router.route("/deleteForm/:id").delete(noticePeriodDelete);

export default router;