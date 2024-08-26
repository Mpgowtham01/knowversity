import mongoose from "mongoose";

const { Schema, model } = mongoose;
const learningpost = new Schema({
    learningFile: String,
    companyName: String,
    course: String,
    courseDuration: String,
    courseFees: Number,
});
learningpost.set("autoIndex", true);

const institutelearningpostDb = model("learningpost", learningpost);
institutelearningpostDb.createIndexes();

export default institutelearningpostDb;