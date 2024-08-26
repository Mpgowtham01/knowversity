import mongoose from "mongoose";

const { Schema, model } = mongoose;

const SubCategoryVendor = new Schema({
  SubCategoryName: String,
  categoryId: String,
});

SubCategoryVendor.set("autoIndex", true);

const SubCategoryVendorDb = model("SubCategoryVendor", SubCategoryVendor);
SubCategoryVendorDb.createIndexes();

export default SubCategoryVendorDb;
