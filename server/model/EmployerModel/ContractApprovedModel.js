import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ContractApproved = new Schema({
  CompanyID: mongoose.Schema.Types.ObjectId,
  UserID: mongoose.Schema.Types.ObjectId,
  Useremail: String,
  companyName: String,
  name: String,
  PositionName: String,
  technology: String,
  Experience: String,
  budget: String,
  JD: String,
  location: String,
});

const ContractApprovedDB = model("ContractPostApproved", ContractApproved);
ContractApprovedDB.createIndexes();

export default ContractApprovedDB;
