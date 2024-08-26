import mongoose from "mongoose";

const { Schema, model } = mongoose;

const traingCourse = new Schema({
  userId: mongoose.Schema.Types.ObjectId,
  companyName: String,
  country: String,
  state: String,
  district: String,
  city: String,
  course: String,
  frameWork: String,
  startDate: String,
  endDate: String,
  // CourseDuration: String,
  Fees: String,
  modeOfStudy: String,
  courseMode: String,
  Description: String,
  companyLogo: String,
  Trainer: String,
  language: String,
  Technology: Array,
  ContactNo: String,
});

traingCourse.set("autoIndex", true);

const traingCourseDb = model("traingCourse", traingCourse);
traingCourseDb.createIndexes();

export default traingCourseDb;