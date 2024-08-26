import { Router } from "express";
import { createPoliceVerification, getPoliceBgv } from "../../../controller/Bgvcontroller/BgvVerification/BgvPoliceVeriController.js";

const router = Router()

router.route("/createPoliceVerify").post(createPoliceVerification)
router.route("/getPoliceVerify").get(getPoliceBgv)

export default router