import express from "express";
import {create,update,getAllInstitute,getInstitute,instituteDelete} from '../controller/instituteController.js'
const router = express.Router()

//create
router.post("/create", create )

// update
router.put("/:id", update)

// getallhotel
router.get("/", getAllInstitute)

router.get("/:id", getInstitute)


// delete
router.delete("/:id", instituteDelete)

//Institute credential

  

export default router;