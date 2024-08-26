import { Router } from "express";
import { createVerification, getEmpBgv } from "../../../controller/Bgvcontroller/BgvVerification/BgvEmployerVeriController.js";

const router = Router()

router.route("/createBgvEmpVerify").post(createVerification)
router.route("/getBgvEmpVerify").get(getEmpBgv)

export default router