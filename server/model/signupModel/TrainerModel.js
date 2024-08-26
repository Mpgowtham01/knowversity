import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Define a schema for professional details
const ProfessionalDetailsSchema = new Schema({
  designation: String,
  experience: Number, // or String if you want to store experience as a text like "5 years"
  skills: [String],
  certifications: [String],
  resume: { type: String, required: false }, // URL or path to resume if stored externally
  // Add other professional details fields here
}, { _id: false }); // _id: false to avoid creating an additional _id field for sub-documents

const TrainerSchema = new Schema(
  {
    role: String,
    firstName: String,
    lastName: String,
    email: String,
    gender: String,
    maritalStatus: String,
    phone: String, // Changed to String for better handling of phone numbers
    dob: String,
    country: String,
    password: String,
    state: String,
    district: String,
    city: String,
    address: String,
    pincode: String, 
    RegistrationId: {
      type: String,
      unique: true
    },// Changed to String for better handling of pincode
    professionalDetails: ProfessionalDetailsSchema, // Add the professional details schema
    verified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const TrainerSignupDb = model("TrainerSignup", TrainerSchema);

export default TrainerSignupDb;
