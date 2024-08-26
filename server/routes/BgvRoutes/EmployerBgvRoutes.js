import { Router } from "express"
const router = Router()

import { createEmp, deleteBgvEmp, getCreateEmp, getEmpByid, updateEmp } from "../../controller/Bgvcontroller/EmployerBgvController.js"

router.route("/create").post(createEmp)
router.route("/getBgvEmp").get(getCreateEmp)
router.route("/getBgvEmp/:id").get(getEmpByid)
router.route("/updateEmp/:id").put(updateEmp)
router.route("/deleteEmp/:id").delete(deleteBgvEmp)

export default router