import mongoose from "mongoose";

const { Schema, model } = mongoose;
const seminarpost = new Schema({
  seminarTitle: String,
  technology: Array,
  time: String,
  fromdate: String,
  todate: String,
  audience: String,
  contactPerson: String,
  contactNumber: Number,
  SeminarMode: String,
  registrationLink: String,
  brochure: String,
  about: String,
  fees: String,
});
seminarpost.set("autoIndex", true);

const instituteseminarpostDb = model("seminarpost", seminarpost);
instituteseminarpostDb.createIndexes();

export default instituteseminarpostDb;
