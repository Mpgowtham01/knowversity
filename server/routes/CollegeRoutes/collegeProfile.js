import { Router } from "express";
const router = Router();

import {
    profileCreate,
    getProfile,
    profileUpdate,
    deleteProfile,
  } from "../../controller/CollegeController/collegeProfile.js";
  //profile
 router.route("/createprofile").post(profileCreate);
 router.route("/getprofile").get(getProfile);
 router.route("/updateprofile/:id").put(profileUpdate);
 router.route("/deleteprofile/:id").delete(deleteProfile);

export default router;