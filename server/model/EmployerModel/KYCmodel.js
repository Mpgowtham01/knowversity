import mongoose from "mongoose";

const { Schema, model } = mongoose;

const KYC = new Schema({ 
  panno: String,
  address: String,
  PanCard: String,
  AadharCard: String,
  Gst: Number,
  AddressProof:String,
});

KYC.set("autoIndex", true); 

const KYCDb = model("kyc", KYC);
KYCDb.createIndexes();

export default KYCDb;