import {
  createFAQ,
  getAllFAQ,
  getOneFaq,
  deleteFaq,
  updateFaq,
} from "../../../controller/userControllers/faqControllers/FaqController.js";
import express from "express";

//Router declare
const router = express.Router();

router.post("/create", createFAQ);

router.get("", getAllFAQ);

router.get("/:id", getOneFaq);

router.delete("/:id", deleteFaq);

router.put("/:id", updateFaq);

export default router;
