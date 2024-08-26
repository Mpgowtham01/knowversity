import express, { json } from "express";
import {createInternship,getAllInternship,updateInternship,getByIdInternShip,deleteInternship} from "../../controller/internshipController/InternshipController.js"

const router = express.Router()

//create
router.post("/create", createInternship )

// update
router.put("/:id", updateInternship)

// getallIntership
router.get("/", getAllInternship)

router.get("/:id", getByIdInternShip)


// delete
router.delete("/:id", deleteInternship)

//Institute credential



export default router;