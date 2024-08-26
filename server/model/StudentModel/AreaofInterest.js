import mongoose from "mongoose";

const { Schema, model } = mongoose;

const AreaofInterest = new Schema({
  domainName: String,
  subdomainName: String,
  fieldName: String,
});

AreaofInterest.set("autoIndex", true);

const AreaofInterestDb = model("areaofinterest", AreaofInterest);
AreaofInterestDb.createIndexes();

export default AreaofInterestDb;
