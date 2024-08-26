import mongoose from "mongoose";

const { Schema, model } = mongoose;

const LanguageSchema = new Schema({
  languageName: String,
});

LanguageSchema.set("autoIndex", true);

const LanguageFields = model("languageAdded", LanguageSchema);
LanguageFields.createIndexes();

export default LanguageFields;
