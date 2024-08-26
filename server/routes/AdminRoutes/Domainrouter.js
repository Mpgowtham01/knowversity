import { Router } from "express";
const router = Router();

import {
  createDomain,
  getDomainList,
  updateDomain,
  deleteDomain,
} from "../../controller/AdminController/Domaincontroller.js";

router.route("/createdomain").post(createDomain);
router.route("/getdomainlist").get(getDomainList);
router.route("/updatedomain/:id").put(updateDomain);
router.route("/deletedomain/:id").delete(deleteDomain);

export default router;
