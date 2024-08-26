import mongoose from "mongoose";

const { Schema, model } = mongoose;

const holdList = new Schema({
  userId: mongoose.Schema.Types.ObjectId,
  Name: String,
  Role: String,
  Remark: String,
});

const holdListDb = model("holdList", holdList);
holdListDb.createIndexes();

export default holdListDb;
