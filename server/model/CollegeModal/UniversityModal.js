import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UniversityList = new Schema({
  UniversityName: String,
});

UniversityList.set("autoIndex", true);

const UniversityListDb = model("UniversityList", UniversityList);
UniversityListDb.createIndexes();

export default UniversityListDb;
