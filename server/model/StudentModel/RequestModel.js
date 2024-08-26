import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ProjetRequest = new Schema({
  role: String,
  UserID: mongoose.Schema.Types.ObjectId,
  userEmail: String,
  projectID: mongoose.Schema.Types.ObjectId,
  email: String,
  projectTitle: String,
  duration: String,
  languages: String,
  description: String,
  qualification: Array,
  skills: Array,
});

ProjetRequest.set("autoIndex", true);

const ProjetRequestDB = model("ProjetRequest", ProjetRequest);
ProjetRequestDB.createIndexes();

export default ProjetRequestDB;
