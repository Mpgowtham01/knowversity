// models/courseNotificationModel.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const CourseNotificationSchema = new Schema({
  message: { type: String, required: true },
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'TrainerSignup', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'TrainingCourse' },
  isRead: { type: Boolean, default: false },
}, { timestamps: true });

const CourseNotification = model('CourseNotification', CourseNotificationSchema);
export default CourseNotification;
