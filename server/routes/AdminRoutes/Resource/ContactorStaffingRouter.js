import { Router } from "express";
const router = Router();

import {
  PostContactor,
  ContactorStaffingGet,
  updateContactorStaffing,
  deleteContractStaff,
} from "../../../controller/AdminController/Resource/ContactorStaffingController.js";

router.route("/ResourcesContactorStaffing").post(PostContactor);
router.route("/ContactorStaffingGet").get(ContactorStaffingGet);
router.route("/putContactorStaffing/:id").put(updateContactorStaffing);

// router.route("/FreelancingPut/:id").put(FreelancingPut);
router.route("/contractStaffDelete/:id").delete(deleteContractStaff);

export default router;
