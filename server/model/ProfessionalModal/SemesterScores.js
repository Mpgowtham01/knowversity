import mongoose from "mongoose";

const { Schema, model } = mongoose;

const SemesterSchema = new Schema({
    semesterPercentage: Number,
    CGPA: Number
 
});

SemesterSchema.set("autoIndex", true);

const SemesterScoreDb = model("semesterscore", SemesterSchema);
SemesterScoreDb.createIndexes();

export default SemesterScoreDb;
