import express from "express";
import { getCourseNotificationsForTrainer } from '../../controller/NotificationController/courseNotificationController.js';

const router = express.Router();
router.get('/courseNotifications/:trainerId', getCourseNotificationsForTrainer);

export default router;