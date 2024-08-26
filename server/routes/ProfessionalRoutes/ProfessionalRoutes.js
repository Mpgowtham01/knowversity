import { Router } from "express";
const router = Router();

import {
  Domain,
  getList,
  updateDomain,
  deleteDomain,
} from "../../controller/ProfessionalController/DomainController.js";

import {
  SubDomain,
  getSubDomainList,
  updateSubDomain,
  deleteSubDomain,
  getSubDomainListId,
} from "../../controller/ProfessionalController/SubDomainController.js";

import {
  Fields,
  getFieldsList,
  updateFields,
  deleteFields,
  getFieldsListId,
} from "../../controller/ProfessionalController/FieldsController.js";

import {
  personalInfo,
  getpersonalInfo,
  updatepersonalInfo,
  deletepersonalInfo,
} from "../../controller/ProfessionalController/PersonalInformation.js";

import {
  qualification,
  getqualification,
  updatequalification,
  deletequalification,
} from "../../controller/ProfessionalController/Qualification.js";

import {
  Score,
  getScore,
  updateScore,
  deleteScore,
} from "../../controller/ProfessionalController/SemesterScores.js";
import {
  Details,
  getDetails,
  updateDetails,
  deleteDetails,
} from "../../controller/ProfessionalController/ProfDetails.js";
import {
  getone,
  getoneuser,
  getRequest,
  ProjectRequest,
} from "../../controller/ProfessionalController/JobRequestController.js";

//DOMAIN
router.route("/create").post(Domain);
router.route("/").get(getList);
router.route("/update/:id").put(updateDomain);
router.route("/delete/:id").delete(deleteDomain);

// SUBDOMAIN
router.route("/createsubdomain").post(SubDomain);
router.route("/subdomain").get(getSubDomainList);
router.route("/updatesubdomain/:id").put(updateSubDomain);
router.route("/deletesubdomain/:id").delete(deleteSubDomain);
router.route("/subdomain/:id").get(getSubDomainListId);

//FIELDS
router.route("/createfields").post(Fields);
router.route("/fields").get(getFieldsList);
router.route("/updatefields/:id").put(updateFields);
router.route("/deletefields/:id").delete(deleteFields);
router.route("/fields/:id").get(getFieldsListId);

//PERSONALINFORMATION
router.route("/createpersonal").post(personalInfo);
router.route("/personal").get(getpersonalInfo);
router.route("updatepersonal/:id").put(updatepersonalInfo);
router.route("deletepersonal/:id").delete(deletepersonalInfo);

//QUALIFICATION
router.route("/createqualification").post(qualification);
router.route("/qualification").get(getqualification);
router.route("updatequalification/:id").put(updatequalification);
router.route("deletequalification/:id").delete(deletequalification);

//SEMESTERSCORE
router.route("/createscore").post(Score);
router.route("/score").get(getScore);
router.route("updatescore/:id").put(updateScore);
router.route("deletescore/:id").delete(deleteScore);

//add details
router.route("/createDetails").post(Details);
router.route("/getDetails").get(getDetails);
router.route("updateDetails/:id").put(updateDetails);
router.route("deleteDetails/:id").delete(deleteDetails);

//JOBS
router.route("/createJobs").post(ProjectRequest);
router.route("/getJobsList").get(getRequest);
router.route("/getonejobs/:id").get(getone);
router.route("/getoneuser/:id").get(getoneuser);

export default router;
