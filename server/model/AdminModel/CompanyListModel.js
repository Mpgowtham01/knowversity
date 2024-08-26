import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CompanyListSchema = new Schema({
  Title: String,
  Description: String,
  Image: String,
  // Image: {
  //   data: Buffer,
  //   contentType: Stringr
  // },
});

CompanyListSchema.set("autoIndex", true);

const CompanyListDb = model("CompanyList", CompanyListSchema);
CompanyListDb.createIndexes();

export default CompanyListDb;
