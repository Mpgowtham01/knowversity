import { Router } from "express"
import { createBgvProfile, deleteBgv, getBgv, getBgvByid, updateBgv } from "../../controller/Bgvcontroller/BgvProfileController.js"

const router = Router()

router.route("/createBgv").post(createBgvProfile)
router.route("/getBgv").get(getBgv)
router.route("/getBgv/:id").get(getBgvByid)
router.route("/updateBgv/:id").put(updateBgv)
router.route("/deleteBgv/:id").delete(deleteBgv)


export default router