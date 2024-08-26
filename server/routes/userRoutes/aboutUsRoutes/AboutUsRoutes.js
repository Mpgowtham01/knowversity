import express from "express";

const router = express.Router();

import {
    createAboutUs,
    updateAboutUs,
    getAboutUs,
    deleteAboutUs,
  } from "../../../controller/userControllers/aboutUs/AboutUsController.js";

router.post("/create", createAboutUs);
router.get("/", getAboutUs);
router.delete("/:id", deleteAboutUs);
router.put("/:id", updateAboutUs);

export default router;
