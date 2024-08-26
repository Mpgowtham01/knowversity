import { Router } from "express";
const router = Router();

import {
    subDomainCreate,
    getAllSubDomain,
    subDomainUpdate,
    subDomainDelete,
    getSubDomainById,
  } from "../../controller/EmployerController/subDomainController.js";

  //subdomain
 router.route("/createSubDomain").post(subDomainCreate);
 router.route("/getAllSubDomain").get(getAllSubDomain);
 router.route("/updateSubDomain/:id").delete(subDomainUpdate);
 router.route("/deleteSubDomain/:id").delete(subDomainDelete);
 router.route("/domainById/:domainId").get(getSubDomainById);

export default router;