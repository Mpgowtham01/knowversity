import mongoose from "mongoose";

const { Schema, model } = mongoose;

const FieldsSchema = new Schema({
  UniversityName: String,
});

FieldsSchema.set("autoIndex", true);

const AdminFields = model("AdminFields", FieldsSchema);
AdminFields.createIndexes();

export default AdminFields;
