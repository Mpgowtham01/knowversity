import mongoose from "mongoose";

const { Schema, model } = mongoose;

const signupSchema = new Schema(
  {
    role: String,
    firstName: String,
    LastName: String,
    email: String,
    gender: String,
    maritalStatus: String,
    phone: Number, 
    country: String,
    dob: String,
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

// signupSchema.set("autoIndex", true);

const SignUpDb = model("studentsignup", signupSchema);
// SignUpDb.createIndexes();

export default SignUpDb;
