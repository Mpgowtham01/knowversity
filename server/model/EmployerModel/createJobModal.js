import mongoose from "mongoose";

const { Schema, model } = mongoose;

const createJobForm = new Schema({
  role: String,
  email: String,
  jobId: mongoose.Schema.Types.ObjectId,
  jobTitle: String,
  location: String,
  technology: String,
  experience: String,
  qualification: String,
  salaryRange: String,
  languagePreference: String,
  companyDescription: String,
  jobDescription: String,
  companyWebsite: String,
  companyMailId: String,
  jobRole: String,
  jobType: String,
  jobMode: String,
  noticePeriod: String,
  skill: Array,
});
createJobForm.set("autoIndex", true);

const createJobFormDb = model("createJobForm", createJobForm);
createJobFormDb.createIndexes();

export default createJobFormDb;
