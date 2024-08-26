import mongoose from "mongoose";

const { Schema, model } = mongoose;

const adminSchema = new Schema({
  role: String,
  email: String,
  password: String,
  RegistrationId: { type: String, unique: true, }
},
{ timestamps: true },
);

const adminLoginDB = model("adminSignup", adminSchema);

export default adminLoginDB;
