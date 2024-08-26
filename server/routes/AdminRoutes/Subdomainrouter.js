import { Router } from "express";
const router = Router();

import {
  createSubdomain,
  getSubdomainlist,
  getSubDomainById,
  updateSubdomain,
  deleteSubdomain,
} from "../../controller/AdminController/Subdomaincontroller.js";

router.route("/createSubdomain").post(createSubdomain);
router.route("/getSubdomianList").get(getSubdomainlist);
router.route("/domainById/:domainId").get(getSubDomainById);
router.route("/updateSubdomain/:id").put(updateSubdomain);
router.route("/deleteSubdomain/:id").delete(deleteSubdomain);

export default router;
