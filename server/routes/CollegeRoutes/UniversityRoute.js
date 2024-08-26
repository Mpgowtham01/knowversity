import { Router } from "express";
const router = Router();

import {
    UniversityListCreate,
    getUniversityList,
    UniversityListUpdate,
    deleteUniversityList,
  } from "../../controller/CollegeController/UniversityController.js";

  //UniversityList
 router.route("/createUniversityList").post(UniversityListCreate);
 router.route("/getUniversityList").get(getUniversityList);
 router.route("/updateUniversityList/:id").put(UniversityListUpdate);
 router.route("/deleteUniversityList/:id").delete(deleteUniversityList);

export default router;