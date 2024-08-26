import mongoose from "mongoose";

const { Schema, model } = mongoose;

const EmployerSchema = new Schema({
  role: String,
  companyName: String,
  employerName: String,
  email: String,
  establishedYear: String,
  industryType: String,
  phone: Number,
  country: String,
  password: String,
  state: String,
  district: String,
  city: String,
  address: String,
  pincode: Number,
  status: String,
  RegistrationId: {
    type: String,
    unique: true
  },
  verified: { type: Boolean, default: false },
},
  { timestamps: true },
);

// EmployerSchema.set("autoIndex", true);

const employerSignUpDb = model("Employersignup", EmployerSchema);
// employerSignUpDb.createIndexes();

export default employerSignUpDb;
