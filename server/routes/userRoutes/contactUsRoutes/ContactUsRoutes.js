import {createContactUs,getContactUs,deleteContactUs,updateContactUs
} from "../../../controller/userControllers/contactUs/ContactUsController.js";
import express from "express";

//Router declare
const router = express.Router();

router.post("/create", createContactUs);

router.get("/getAllContactUs", getContactUs);


router.delete("/:id", deleteContactUs);

router.put("/:id", updateContactUs);

export default router;
