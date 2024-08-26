import mongoose from "mongoose";

const { Schema, model } = mongoose;

const backgroundSchema = new Schema({
  role: String,
  type: String,
  companyName: String,
  website: String,
  phone: Number,
  email: String,
  password: String,
  state: String,
  district: String,
  city: String,
  country: String,
  address: String,
  pincode: Number,
  RegistrationId: { type: String, unique: true, },
  verified: { type: Boolean, default: false },
},
{ timestamps: true },
);

const backgroundDB = model("background", backgroundSchema);

export default backgroundDB;
