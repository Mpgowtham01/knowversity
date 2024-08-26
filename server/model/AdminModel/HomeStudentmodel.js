import mongoose from "mongoose";

const { Schema, model } = mongoose;

const HomeStudentSchema = new Schema({
  name: String,
  StudentImage: String,
});

HomeStudentSchema.set("autoIndex", true);

const HomeStudentDb = model("homestudent", HomeStudentSchema);
HomeStudentDb.createIndexes();

export default HomeStudentDb;
