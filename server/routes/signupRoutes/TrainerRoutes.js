import { Router } from "express";
const router = Router();

import {
userSignup,
getTrainerList,
getoneTrainer,
updateTrainer,
deleteTrainer,
TrainerLogin,
updateProfessionalDetails,
} from "../../controller/SignupController/TrainerController.js";
import { authenticateToken } from "../../middleware/auth.js";
import resume from "../../middleware/multer.js";

router.route("/Trainercreate").post(userSignup);
// router.route("/Trainer_get").get(authenticateToken, getList);
router.route("/Trainerget").get(getTrainerList);
router.route("/Trainergetone/:id").get(getoneTrainer);
router.route("/Trainerupdate/:id").put(updateTrainer);
// router.route("/Trainer_delete/:id").delete(deleteTrainer);
// router.post("/resume", resume, uploadResume);
router.route("/Trainerlogin").post(TrainerLogin);
router.route("/trainerprofessionalinfo/:id").put(updateProfessionalDetails);

export default router;
