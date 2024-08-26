import {createcontactus, getcontactus} from "../controller/contactusController.js";
import express from "express";

//Router declare
const router = express.Router();

router.post("/create", createcontactus);

router.get("/getAllcontactus", getcontactus);


// router.delete("/:id", deleteContactUs);

// router.put("/:id", updateContactUs);

export default router;
