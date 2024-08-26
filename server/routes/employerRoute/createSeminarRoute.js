import express from "express";
const router = express.Router();
import { createSeminarForm,getCreateSeminar,updateCreateSeminar,deleteCreateSeminar } from "../../controller/EmployerController/createSeminarController.js";


router.route("/createForm").post(createSeminarForm);
router.route("/getForm").get(getCreateSeminar);
router.route("/updateForm/:id").put(updateCreateSeminar);
router.route("/deleteForm/:id").delete(deleteCreateSeminar);

export default router;
