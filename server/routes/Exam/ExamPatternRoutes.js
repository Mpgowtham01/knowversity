import { Router } from "express";
const router = Router();

import {
  create,
  findById,
} from "../../controller/ExamController/ExamPatternController.js";
import {
  find,
  getquestion,
} from "../../controller/ExamController/ExamPatternController.js";
import { Examupdate } from "../../controller/ExamController/ExamPatternController.js";
import { Examdelete } from "../../controller/ExamController/ExamPatternController.js";

router.route("/create").post(create);
router.route("/get").get(find);
router.route("/getID/:id").get(findById);
router.route("/update/:id").put(Examupdate);
router.route("/delete/:id").delete(Examdelete);
router.route("/getQ").get(getquestion);

export default router;
