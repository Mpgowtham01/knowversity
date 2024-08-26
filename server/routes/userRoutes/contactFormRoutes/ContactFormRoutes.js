import {createContactForm,getContactFormAll,getContactFormOne,deleteContactForm,updateContactForm
} from "../../../controller/userControllers/contactFormController/ContactFormController.js";
import express from "express";

//Router declare
const router = express.Router();

router.post("/create", createContactForm);

router.get("", getContactFormAll);

router.get("/:id", getContactFormOne);

router.delete("/:id", deleteContactForm);

router.put("/:id", updateContactForm);

export default router;
