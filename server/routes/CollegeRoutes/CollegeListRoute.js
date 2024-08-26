import { Router } from "express";
const router = Router();

import {
    CollegeListCreate,
    getCollegeList,
    CollegeListUpdate,
    deleteCollegeList,
  } from "../../controller/CollegeController/CollegeListController.js";

  //CollegeList
 router.route("/createCollegeList").post(CollegeListCreate);
 router.route("/getCollegeList").get(getCollegeList);
 router.route("/updateCollegeList/:id").put(CollegeListUpdate);
 router.route("/deleteCollegeList/:id").delete(deleteCollegeList);

export default router;