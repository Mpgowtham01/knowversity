import mongoose from "mongoose";

const { Schema, model } = mongoose;

const JobRequest = new Schema({
  role: String,
  email: String,
  userEmail: String,
  jobId: mongoose.Schema.Types.ObjectId,
  UserID: mongoose.Schema.Types.ObjectId,
  jobTitle: String,
  locations: String,
  technology: Array,
  experience: String,
  qualification: Array,
  salaryRange: String,
  interviewType: String,
  jobDescription: String,
  jobRole: String,
  noticePeriod: String,
  skill: Array,
});

JobRequest.set("autoIndex", true);

const JobRequestDB = model("JobRequest", JobRequest);
JobRequestDB.createIndexes();

export default JobRequestDB;
