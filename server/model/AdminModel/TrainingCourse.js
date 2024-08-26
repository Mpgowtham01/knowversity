// models/course.js
import mongoose from "mongoose";

const { Schema, model } = mongoose;
const CourseSchema = new Schema({
  title: { type: String },
  description: { type: String },
  instructor: { type: String },
  duration: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  classDays: { type: [String] },
  classTime: { type: [String] },
  mode: { type: String, enum: ['online', 'offline'] },
  price: { type: String },
  image: { type: String },
  rating: { type: Number },
  whatYoullLearn: { type: [String] },
  technologies: { type: [String] },
  trainers: [{
    trainerId: { type: mongoose.Schema.Types.ObjectId, ref: 'TrainerSignupDb' },
    status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' },
  }],
},
{ timestamps: true },
);


const Course = model('TrainingCourse', CourseSchema);
Course.createIndexes();
export default Course;
