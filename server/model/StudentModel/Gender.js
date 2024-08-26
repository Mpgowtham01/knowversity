import mongoose from "mongoose";

const { Schema, model } = mongoose;

const Gender = new Schema({
  gender: String,
});

Gender.set("autoIndex", true);

const GenderDb = model("Gender", Gender);
GenderDb.createIndexes();

export default GenderDb;
