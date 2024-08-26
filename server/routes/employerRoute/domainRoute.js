import { Router } from "express";
const router = Router();

import {
    domainCreate,
    getAllDomain,
    domainUpdate,
    domainDelete,
  } from "../../controller/EmployerController/domainController.js";

  //domain
 router.route("/createDomain").post(domainCreate);
 router.route("/getDomain").get(getAllDomain);
 router.route("/updateDomain/:id").put(domainUpdate);
 router.route("/deleteDomain/:id").delete(domainDelete);

export default router;