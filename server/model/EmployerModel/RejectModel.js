import mongoose from "mongoose";

const { Schema, model } = mongoose;

const rejectList = new Schema({
  userId: mongoose.Schema.Types.ObjectId,
  Name: String,
  Role: String,
  Reason: String,
});

const rejectListDb = model("rejectList", rejectList);
rejectListDb.createIndexes();

export default rejectListDb;
