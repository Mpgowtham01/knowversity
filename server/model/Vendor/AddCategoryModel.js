import mongoose from "mongoose";

const { Schema, model } = mongoose;

const AddCategory = new Schema({
  companyName: String,
  Description: String,
  email: String,
  Websitelink: String,
  Regularprice: String,
  Discountprice: String,
  country: String,
  State: String,
  district: String,
  City: String,
  category: String,
});

AddCategory.set("autoIndex", true);

const AddCategoryDb = model("AddCategory", AddCategory);
AddCategoryDb.createIndexes();

export default AddCategoryDb;
