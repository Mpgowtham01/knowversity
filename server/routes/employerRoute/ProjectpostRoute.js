import { Router } from "express";
const router = Router();

import {
  createproject,
  deleteOurProfile,
  updateProject,
  getAllProfile,
  getone,
  getoneSpecific,
  getoneUser,
} from "../../controller/EmployerController/ProjectpostController.js";

import {
  createprojectRequest,
  getoneapproved,
  getonerequests,
} from "../../controller/EmployerController/EmployerProjectRequestController.js";

//   create Notice Form

router.route("/create_project_post").post(createproject);
router.route("/get_project_post").get(getAllProfile);
router.route("/put_project/:id").put(updateProject)
router.route("/getoneproject/:id").get(getone);
router.route("/getoneSpecific/:id").get(getoneSpecific);
router.route("/delete_project_post/:id").delete(deleteOurProfile);
router.route("/project_post_getone/:id").get(getoneUser);
router.route("/create_requestproject").post(createprojectRequest);
router.route("/getonerequest/:id").get(getonerequests);
router.route("/getapproved/:id").get(getoneapproved);

export default router;
