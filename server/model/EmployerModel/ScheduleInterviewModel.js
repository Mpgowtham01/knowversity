import mongoose from "mongoose";

const { Schema, model } = mongoose;

const scheduleInterview = new Schema({
  userId: mongoose.Schema.Types.ObjectId,
  Name: String,
  Date: String,
  Time: String,
  Mode: String,
  Role: String,
  AssignTo: String,
});

const scheduleInterviewDb = model("scheduleInterview", scheduleInterview);
scheduleInterviewDb.createIndexes();

export default scheduleInterviewDb;
