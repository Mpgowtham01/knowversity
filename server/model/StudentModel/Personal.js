import mongoose from "mongoose";

const { Schema, model } = mongoose;

const PersonalInfo = new Schema({
  userId: mongoose.Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  dob: String,
  registerId: String,
  email: String,
  gender: String,
  address: String,
  country: String,
  state: String,
  district: String,
  city: String,
  meritalStatus: String,
  school: String,
  class: String,
  image: String,
});
PersonalInfo.set("autoIndex", true);

const PersonalFormDb = model("personal", PersonalInfo);
PersonalFormDb.createIndexes();

export default PersonalFormDb;
