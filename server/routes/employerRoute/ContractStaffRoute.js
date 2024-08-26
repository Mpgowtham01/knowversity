import { Router } from "express";
import {
  createpostApproved,
  createRequestContracts,
  getOneContractjobRequest,
  getOneContractPost,
  getonecontractrequest,
} from "../../controller/EmployerController/ContractJobRequest.js";
import {
  createContractRequest,
  getOneContractRequest,
} from "../../controller/EmployerController/ContractRequestController.js";

const router = Router();

import {
  createContract,
  getoneContract,
  getonecontractjobrequest,
} from "../../controller/EmployerController/ContractStaffController.js";

router.route("/createContract").post(createContract);
router.route("/getOneContrat/:id").get(getoneContract);
router.route("/getAllPost").get(getonecontractjobrequest);

router.route("/createJobRequest").post(createRequestContracts);
router.route("/getoneJobRequest/:id").get(getOneContractjobRequest);
router.route("/getAllPosts").get(getonecontractrequest);

router.route("/createApprovedPost").post(createpostApproved);
router.route("/getOnePostApproved/:id").get(getOneContractPost);

router.route("/createApproved").post(createContractRequest);
router.route("/getoneApproved/:id").get(getOneContractRequest);

export default router;
