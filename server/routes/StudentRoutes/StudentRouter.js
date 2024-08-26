import { Router } from "express";
const router = Router();

//Gender
import {
  createGender,
  getGenderList,
  updateGender,
  deleteGender,
} from "../../controller/StudentController/Gender.js";

router.route("/createGender").post(createGender);
router.route("/getGenderlist").get(getGenderList);
router.route("/updateGender/:id").put(updateGender);
router.route("/deleteGender/:id").delete(deleteGender);

//marital status
import {
  createMarital,
  getMaritalList,
  updateMarital,
  deleteMarital,
} from "../../controller/StudentController/Marital.js";

router.route("/createMarital").post(createMarital);
router.route("/getMarital").get(getMaritalList);
router.route("/updateMarital/:id").put(updateMarital);
router.route("/deleteMarital/:id").delete(deleteMarital);

//mode of internship
import {
  createMode,
  getModeList,
  updateMode,
  deleteMode,
} from "../../controller/StudentController/Mode.js";

router.route("/createMode").post(createMode);
router.route("/getMode").get(getModeList);
router.route("/updateMode/:id").put(updateMode);
router.route("/deleteMode/:id").delete(deleteMode);

//Blog
import {
  createBlog,
  getBlogList,
  getBlogById,
  updateBlog,
  deleteBlog,
  updateBlogById,
  getListByStatus,
  uploadImage,
} from "../../controller/StudentController/Blog.js";
import blogImage from "../../middleware/blogMulter.js";

router.route("/createBlog").post(createBlog);
router.route("/getBloglist").get(getBlogList);
router.route("/getBloglist/status").get(getListByStatus);
router.route("/getblogbyid/:id").get(getBlogById);
router.route("/updateBlog/:id").put(updateBlog);
router.route("/updateBlogbyid/:id").put(updateBlogById);
router.route("/deleteBlog/:id").delete(deleteBlog);
router.post("/uploadImage", blogImage, uploadImage);

//DOMAIN
import {
  createDomain,
  getDomainList,
  updateDomain,
  deleteDomain,
} from "../../controller/StudentController/Domain.js";

router.route("/createdomain").post(createDomain);
router.route("/getdomainlist").get(getDomainList);
router.route("/updatedomain/:id").put(updateDomain);
router.route("/deletedomain/:id").delete(deleteDomain);

//SUBDOMAIN
import {
  createSubDomain,
  getSubDomainList,
  updateSubDomain,
  deleteSubDomain,
  getSubDomainById,
} from "../../controller/StudentController/SubDomain.js";

router.route("/createsubdomain").post(createSubDomain);
router.route("/getsubdomainlist").get(getSubDomainList);
router.route("/subdomainById/:domainId").get(getSubDomainById);
router.route("/updatesubdomain/:id").put(updateSubDomain);
router.route("/deletesubdomain/:id").delete(deleteSubDomain);

//FIELD
import {
  createField,
  getFieldList,
  updateField,
  deleteField,
  getFieldById,
} from "../../controller/StudentController/Field.js";

router.route("/createfield").post(createField);
router.route("/getfieldlist").get(getFieldList);
router.route("/fieldById/:subdomainId").get(getFieldById);
router.route("/updatefield/:id").put(updateField);
router.route("/deletefield/:id").delete(deleteField);

//PERSONAL
import {
  createPersonal,
  getAllPersonal,
  getonePersonal,
  updatePersonal,
  deletePersonal,
  uploadStudentImage,
} from "../../controller/StudentController/Personal.js";
import studentImage from "../../middleware/studentMulter.js";

router.route("/createpersonal").post(createPersonal);
router.route("/getallpersonal").get(getAllPersonal);
router.route("/getonepersonal/:id").get(getonePersonal);
router.route("/updatepersonal/:id").put(updatePersonal);
router.route("/deletepersonal/:id").delete(deletePersonal);
router.post("/uploadImage", studentImage, uploadStudentImage);

//QUALIFICATION
import {
  createQualification,
  getAllQualification,
  updateQualification,
  deleteQualification,
  getQualification,
} from "../../controller/StudentController/Qualification.js";

router.route("/createqualification").post(createQualification);
router.route("/getallqualification").get(getAllQualification);
router.route("/getqualification/:id").get(getQualification);
router.route("/updatequalification/:id").put(updateQualification);
router.route("/deletequalification/:id").delete(deleteQualification);

//SEMESTER
import {
  createSemester,
  getAllSemester,
  updateSemester,
  deleteSemester,
} from "../../controller/StudentController/Semester.js";

router.route("/createsemester").post(createSemester);
router.route("/getallsemester").get(getAllSemester);
router.route("/updatesemester/:id").put(updateSemester);
router.route("/deletesemester/:id").delete(deleteSemester);

//AreaofInterest
import {
  createAreaofInterest,
  deleteAreaofInterest,
} from "../../controller/StudentController/AreaofInterest.js";

router.route("/createareaofinterest").post(createAreaofInterest);
router.route("/deleteareaofinterest/:id").delete(deleteAreaofInterest);

// Internship
import {
  createIntershipRequest,
  deleteIntershipRequest,
  getIntership,
  getoneIntership,
} from "../../controller/StudentController/Intership.js";

router.route("/createintership").post(createIntershipRequest);
router.route("/deleteintership/:id").delete(deleteIntershipRequest);
router.route("/getintership").get(getIntership);
router.route("/getoneintership/:id").get(getoneIntership);

// PROJECT

import {
  deleteRequest,
  getoneUser,
  getoneUsers,
  getRequest,
  ProjectRequest,
} from "../../controller/StudentController/RequestProjectController.js";

router.route("/requestCreate").post(ProjectRequest);
router.route("/getRequest").get(getRequest);
router.route("/requestgetone/:id").get(getoneUser);
router.route("deleteRequest").delete(deleteRequest);
router.route("/request_getone/:id").get(getoneUsers);

export default router;
