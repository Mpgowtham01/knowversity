import mongoose from "mongoose";

const { Schema, model } = mongoose;

const Contractrequest = new Schema({
  CompanyID: mongoose.Schema.Types.ObjectId,
  UserID: mongoose.Schema.Types.ObjectId,
  name: String,
  CompanyEmail: String,
  UserEmail: String,
  FirstName: String,
  LastName: String,
  location: String,
  phone: Number,
});

const ContractrequestDB = model("ContractApproved", Contractrequest);
ContractrequestDB.createIndexes();

export default ContractrequestDB;
