import mongoose from "mongoose";

const { Schema, model } = mongoose;

const selectedList = new Schema({
  userId: mongoose.Schema.Types.ObjectId,
  Name: String,
  Role: String,
  Remark: String,
});

const selectedListDb = model("selectedList", selectedList);
selectedListDb.createIndexes();

export default selectedListDb;
