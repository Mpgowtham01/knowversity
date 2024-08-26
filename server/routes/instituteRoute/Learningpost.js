import { Router } from "express";
import { getAlllearning, learningCreate, learningDelete, learningUpdate, uploadImage } from "../../controller/instituteController/Learningpost.js";


import image from "../../middleware/Learning.js";



const router = Router();


router.route("/createLearning").post(learningCreate);
router.route("/getLearning").get(getAlllearning);
router.route("/updateLearning/:id").put(learningUpdate);
router.route("/deleteLearning/:id").delete(learningDelete);
router.post("/uploadimage", image, uploadImage);


export default router;
