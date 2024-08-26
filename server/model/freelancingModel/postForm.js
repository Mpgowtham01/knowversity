import mongoose from "mongoose";

const { Schema, model } = mongoose;

const freelancingPostForm = new Schema({
  jobTitle: String,
  price: Number,
  country: String, 
  technology: String,
  language: Array,
  timingForPay: String,
  description: String,
});

const freelancingFormDB = model("freelancingPostForm", freelancingPostForm);
freelancingFormDB.createIndexes();

export default freelancingFormDB;
