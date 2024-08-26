import mongoose from "mongoose";

const { Schema, model } = mongoose;

const qualificationSchema = new Schema({
  qualificationName: String,
});

qualificationSchema.set("autoIndex", true);

const QualificationFields = model("qualificationAdded", qualificationSchema);
QualificationFields.createIndexes();

export default QualificationFields;
