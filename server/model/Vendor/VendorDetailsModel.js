import mongoose from "mongoose";

const { Schema, model } = mongoose;

const VendorDetails = new Schema({
  Name: String,
  email: String,
  mobileNumber:String,
  address:String,
  businessName:String,
  country:String,
  state:String,
  district:String,
  city:String,
});

VendorDetails.set("autoIndex", true);

const VendorDetailsDb = model("VendorDetails", VendorDetails);
VendorDetailsDb.createIndexes();

export default VendorDetailsDb;