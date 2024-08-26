import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CollegeSchema = new Schema(
  {
    role: String,
    collegeName: String,
    collegetype: String,
    website: String,
    email: String,
    establishedYear: String,
    service: String,
    phone: Number,
    country: String,
    password: String,
    state: String,
    district: String,
    city: String,
    address: String,
    pincode: Number,
    RegistrationId: { type: String, unique: true },
    verified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const adminLoginDB = model("colleleSignup", CollegeSchema);

export default adminLoginDB;
