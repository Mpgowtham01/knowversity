import { Router } from "express";
import {
  getAllSeminor,
  SeminorCreate,
  SeminorDelete,
  SeminorUpdate,
} from "../../controller/CollegeController/Seminorcontroller.js";

const router = Router();

router.route("/SeminorCreate").post(SeminorCreate);
router.route("/getSeminor").get(getAllSeminor);
router.route("/updateSeminor/:id").put(SeminorUpdate);
router.route("/deleteSeminor/:id").delete(SeminorDelete);


export default router;
