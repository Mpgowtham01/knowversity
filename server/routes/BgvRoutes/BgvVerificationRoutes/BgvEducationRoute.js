import { Router } from "express";
import { createVerification, getEduBgv } from "../../../controller/Bgvcontroller/BgvVerification/BgvEducationVeriController.js";

const router = Router()


router.route("/createtBgvEduVerify").post(createVerification)
router.route("/getBgvEduVerify").get(getEduBgv)

export default router