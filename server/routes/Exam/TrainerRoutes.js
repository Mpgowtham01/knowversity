import { Router } from "express";
import { create, deleteTrainer, find, findById, updateTrainer } from "../../controller/ExamController/TrainerController.js";

const router =Router()

router.route("/create").post(create)
router.route("/get").get(find);
router.route("/getID/:id").get(findById);
router.route("/update/:id").put(updateTrainer);
router.route("/delete/:id").delete(deleteTrainer);

export default router