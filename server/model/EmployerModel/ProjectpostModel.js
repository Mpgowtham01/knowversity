import mongoose from "mongoose";

const { Schema, model } = mongoose;

const projectpost = new Schema({
  role: String,
  email: String,
  projectTitle: String,
  projectID: String,
  duration: String,
  qualification: Array,
  languages: String,
  skills: Array,
  mode: String,
  description: String,
});

const projectpostDB = model("projectpost", projectpost);
projectpostDB.createIndexes();

export default projectpostDB;
