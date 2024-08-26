// routes/courseRoutes.js
import express from "express";
import {getCourses, createCourse, getCourseById, updateCourse, deleteCourse, assignTrainersToCourse,   matchTrainersBySkills, 
    respondToAssignment, 
    
} from '../../controller/AdminController/TrainingCourseController.js';
import upload from "../../middleware/Uploads/TrainingCourseMiddleware.js";

const router = express.Router();
router.get('/getAllCourses', getCourses);
router.post('/createCourse',upload, createCourse);
router.get('/getcourseById/:id', getCourseById);
router.put('/updatecourse/:id', updateCourse);
router.delete('/deletecourse/:id', deleteCourse);
router.put('/assignTrainers/:courseId', assignTrainersToCourse); 
router.post('/assignMatchingTrainers/:id', matchTrainersBySkills);
router.post('/responseforCourseAssignment/:courseId/:trainerId', respondToAssignment);


export default router;
