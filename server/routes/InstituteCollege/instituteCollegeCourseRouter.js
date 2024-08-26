import express from "express";
import {createCourse,updateCourse,getAllCourse,getCourse,deleteCourse} from '../controller/instituteCourseController.js'
const router = express.Router()

//create
router.post("/:instituteId", createCourse)

// update
router.put("/:id", updateCourse)

// getallhotel
router.get("/", getAllCourse)
// getone
router.get("/:id", getCourse)
// delete
router.delete("/:id/:instituteId", deleteCourse)


  

export default router;