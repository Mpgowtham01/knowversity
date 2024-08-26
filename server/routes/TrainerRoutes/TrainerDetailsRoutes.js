import express from 'express';
import { addProfessionalInfo, getProfessionalInfo } from '../../controller/TrainerController/TrainerDetailsController.js';

const router = express.Router();

router.post('/addprofessionalinfo', addProfessionalInfo);
router.get('/getprofessionalinfo/:id', getProfessionalInfo);

export default router;
