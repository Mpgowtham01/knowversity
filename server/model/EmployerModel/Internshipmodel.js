import mongoose from "mongoose";

const { Schema, model } = mongoose;

const Internship = new Schema({
  role: String,
  email: String,
  userEmail: String,
  jobId: mongoose.Schema.Types.ObjectId,
  jobTitle: String,
  location: String,
  technology: String,
  experience: String,
  qualification: String,
  salaryRange: String,
  languagePreference: String,
  responsibilities: String,
  jobDescription: String,
  companyWebsite: String,
  companyMailId: String,
  department: String,
  jobRole: String,
  jobType: String,
  jobMode: String,
  noticePeriod: String,
  skill: Array,
});
Internship.set("autoIndex", true);

const InternshipDb = model("Internship", Internship);
InternshipDb.createIndexes();

export default InternshipDb;
