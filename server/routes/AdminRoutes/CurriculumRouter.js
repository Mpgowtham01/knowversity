import express from 'express';
import { getCurriculum, createCurriculum, getCurriculumById, updateCurriculum, deleteCurriculum } from '../../controller/AdminController/CurriculumController.js';
import upload from "../../middleware/Uploads/CurriculumCourseMiddleware.js"

const router = express.Router();

router.get('/getcurriculum', getCurriculum);
router.post('/createcurriculum',upload, createCurriculum);
router.get('/getcurriculumById/:id', getCurriculumById);
router.put('/updatecurriculum/:id', updateCurriculum);
router.delete('/deletecurriculum/:id', deleteCurriculum);

export default router;

