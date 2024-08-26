import mongoose from "mongoose";

const { Schema, model } = mongoose;

const profile = new Schema({
  University: String,
  College: String,
  Autonomous: String,
  Name: String,
  Designation: String,
  Degree: String,
  Department: String,
  PhoneNumber: Number,
});

profile.set("autoIndex", true);

const profileDb = model("profile", profile);
profileDb.createIndexes();

export default profileDb;
