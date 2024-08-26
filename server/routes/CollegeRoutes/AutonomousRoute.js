import { Router } from "express";
const router = Router();

import {
    AutonomousCreate,
    getAutonomous,
    AutonomousUpdate,
    deleteAutonomous,
  } from "../../controller/CollegeController/AutonomousController.js";

  //Autonomous
 router.route("/createAutonomous").post(AutonomousCreate);
 router.route("/getAutonomous").get(getAutonomous);
 router.route("/updateAutonomous/:id").put(AutonomousUpdate);
 router.route("/deleteAutonomous/:id").delete(deleteAutonomous);

export default router;