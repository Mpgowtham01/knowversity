import mongoose from "mongoose";

const { Schema, model } = mongoose;

const projectrequest = new Schema({
  role: String,
  UserID: mongoose.Schema.Types.ObjectId,
  employerID: mongoose.Schema.Types.ObjectId,
  userEmail: String,
  email: String,
  projectTitle: String,
  projectID: String,
  duration: String,
  qualification: Array,
  locations: String,
  skill: Array,
  technology: Array,
});

const projectrequestDB = model("Employerprojectrequest", projectrequest);
projectrequestDB.createIndexes();

export default projectrequestDB;
