import { Router } from "express";
const router = Router();
import {
  create,
  QBupdate,
  QBdelete,
  Qfind,
  findById,
  SQfind,
  QuestionBankGetAll,
  QfindWeek,
  // Questupdate,
} from "../../controller/ExamController/QuestionBankController.js";

import {
  createNewQuest,
  QBNfind,
  QBNupdate,
} from "../../controller/ExamController/NewQuestinonController.js";

router.route("/create").post(create);
router.route("/get").get(Qfind);
router.route("/getWeek/").get(QfindWeek);
router.route("/getid/:id").get(findById);
// router.route("/getq/:id").get(findByq);
router.route("/update/:id").put(QBupdate);
router.route("/delete/:id").delete(QBdelete);

// router.route("/getsq/:id/totalWeeks/:_id").get(findBysq);
// router.route("get/:id/week/:id").get(findBysq);
router.route("/newQuest").post(createNewQuest);
router.route("/getq").get(QBNfind);
router.route("/updateq/:id").put(QBNupdate);

//admin delete particular question
// router.route("/questionbanks/").put(Questupdate);
router.roy;
//quiz
router.route("/SQget").get(SQfind);
router.route("/getAll").get(QuestionBankGetAll);

export default router;
