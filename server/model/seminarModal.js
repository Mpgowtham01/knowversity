import mongoose from "mongoose";

const { Schema, model } = mongoose;
const seminar = new Schema({
  userId: mongoose.Schema.Types.ObjectId,
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
seminar.set("autoIndex", true);

const seminarDb = model("seminar", seminar);
seminarDb.createIndexes();

export default seminarDb;
