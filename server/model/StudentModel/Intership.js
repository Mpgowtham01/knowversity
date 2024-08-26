import mongoose from "mongoose";

const { Schema, model } = mongoose;

const IntershipRequest = new Schema({
  // name: String,
  // expectedField: String,
  // intershipDuration: String,
  // describtion: String,
  // ModeOfIntern: String,
  // CourseDuration: String,
  role: String,
  email: String,
  userEmail: String,
  jobId: mongoose.Schema.Types.ObjectId,
  UserID: mongoose.Schema.Types.ObjectId,
  jobTitle: String,
  locations: String,
  technology: String,
  experience: String,
  qualification: Array,
  salaryRange: String,
  interviewType: String,
  jobDescription: String,
  jobRole: String,
  noticePeriod: String,
  skill: Array,
});

IntershipRequest.set("autoIndex", true);

const IntershipRequestDB = model("intershipRequest", IntershipRequest);
IntershipRequestDB.createIndexes();

export default IntershipRequestDB;
