import mongoose from "mongoose";

const { Schema, model } = mongoose;

const EmployerJobRequest = new Schema({
  role: String,
  email: String,
  userEmail: String,
  jobId: mongoose.Schema.Types.ObjectId,
  UserID: mongoose.Schema.Types.ObjectId,
  jobTitle: String,
  location:String,
  experience:String,
  companyMailId:String,
  experience:String,
  jobType:String,
});

EmployerJobRequest.set("autoIndex", true);

const EmployerJobRequestDB = model("EmployerJobRequest", EmployerJobRequest);
EmployerJobRequestDB.createIndexes();

export default EmployerJobRequestDB;
