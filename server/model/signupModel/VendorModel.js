import mongoose from "mongoose";

const { Schema, model } = mongoose;

const VendorSchema  = new Schema(
  {
    role: String,
    companyName: String,
    type: String,
    email: String,
    website: String, 
    phone: Number,
    password: String,
    country: String,
    state: String,
    district: String,
    city: String,
    businessName:String,
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

const VendorDb = model("Vendor", VendorSchema);
// SignUpDb.createIndexes();

export default VendorDb; 
