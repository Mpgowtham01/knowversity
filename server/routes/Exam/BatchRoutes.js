import { Router } from "express";
import {
  Batchdelete,
  batchupdate,
  create,
  find,
  findById,
} from "../../controller/ExamController/BatchController.js";

const router = Router();

router.route("/create").post(create);
router.route("/get").get(find);
router.route("/getID/:id").get(findById);
router.route("/update/:id").put(batchupdate);
router.route("/delete/:id").delete(Batchdelete);

export default router;
