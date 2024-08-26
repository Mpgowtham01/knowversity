import mongoose from "mongoose";

const { Schema, model } = mongoose;

const contract = new Schema({
  CompanyID: mongoose.Schema.Types.ObjectId,
  companyName: String,
  Website: String,
  linkedin: String,
  FirstName: String,
  LastName: String,
  location: String,
  First: String,
  Last: String,
  phone: String,
  email: String,
  employee: String,
  react: Array,
  node: Array,
  reactNative: Array,
  java: Array,
  php: Array,
  angular: Array,
  flutter: Array,
});
contract.set("autoIndex", true);

const contractFormDb = model("contractForm", contract);
contractFormDb.createIndexes();

export default contractFormDb;
