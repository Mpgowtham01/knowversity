import mongoose from "mongoose";

const { Schema, model } = mongoose;

const instituteSchema = new Schema({
  role: String,
  instituteName: String,
  instituteType: String,
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
  RegistrationId: {
    type: String,
    unique: true
  },
  verified: { type: Boolean, default: false },
},
  { timestamps: true },
);
// instituteSchema.set("autoIndex", true);

const instituteSignUpDb = model("instituteSignup", instituteSchema);
// instituteSignUpDb.createIndexes();

export default instituteSignUpDb;
