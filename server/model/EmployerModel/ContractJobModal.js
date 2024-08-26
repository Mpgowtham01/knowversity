import mongoose from "mongoose";

const { Schema, model } = mongoose;

const Contractjobrequest = new Schema({
  CompanyID: mongoose.Schema.Types.ObjectId,
  PositionName: String,
  companyName: String,
  technology: String,
  Experience: String,
  budget: String,
  JD: String,
  location: String,
});

const ContractjobrequestDB = model("contractjobrequest", Contractjobrequest);
ContractjobrequestDB.createIndexes();

export default ContractjobrequestDB;
