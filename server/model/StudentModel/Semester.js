import mongoose from "mongoose";

const { Schema, model } = mongoose;

const Semester = new Schema({
  course: String,
  semester: [{ type: String }],
  arrear: string,
});
Semester.set("autoIndex", true);

const SemesterDb = model("Qualification", Semester);
SemesterDb.createIndexes();

export default SemesterDb;
