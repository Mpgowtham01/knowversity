import { Router } from "express";
const router = Router();

import {
  createApproved,
  createCollege,
  createFileds,
  createlanguageFileds,
  createlocationFileds,
  createqualificationFileds,
  deleteApprovedList,
  getapprovedfields,
  getCollegeById,
  getfields,
  getLanguagefields,
  getLocationfields,
  getqualificationfields,
  getcategoryfields,
  createCategoryField,
} from "../../controller/AdminController/FieldsController.js";

router.route("/Create").post(createFileds);
router.route("/getAll").get(getfields);

router.route("/collegecreate").post(createCollege);
router.route("/getAllCollege/:university_id").get(getCollegeById);

router.route("/createApproved").post(createApproved);
router.route("/getApproved").get(getapprovedfields);
router.route("/deleteApproved/:id").delete(deleteApprovedList);

//Language Added
router.route("/createlanguage").post(createlanguageFileds);
router.route("/getlanguage").get(getLanguagefields);

//Location Added
router.route("/createlocation").post(createlocationFileds);
router.route("/getlocation").get(getLocationfields);

//Qualification Added
router.route("/createqualification").post(createqualificationFileds);
router.route("/getqualification").get(getqualificationfields);
  
// category Added
 router.route("/createcategory").post(createCategoryField);
 router.route("/getcategory").get(getcategoryfields);

export default router;
