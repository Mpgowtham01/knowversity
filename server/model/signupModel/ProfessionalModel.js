import mongoose from "mongoose";

const { Schema, model } = mongoose;

const EmployeeSchema = new Schema(
  {
    role: String,
    firstName: String,
    LastName: String,
    email: String,
    gender: String,
    maritalStatus: String,
    phone: Number,
    dob: String,
    country: String,
    password: String,
    state: String,
    district: String,
    city: String,
    address: String,
    pincode: Number,
    RegistrationId: {
      type: String,
      unique: true,
    },
    verified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// EmployeeSchema.set("autoIndex", true);

const employeeSignUpDb = model("Professionalsignup", EmployeeSchema);
// employeeSignUpDb.createIndexes();

export default employeeSignUpDb;
