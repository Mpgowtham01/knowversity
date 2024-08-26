import mongoose from "mongoose";

const {Schema, model} = mongoose;

const interviewDrop = new Schema({
    scheduleInterview: String,
});
interviewDrop.set("autoIndex", true);

const interviewFormDb = model("interviewForm", interviewDrop);
interviewFormDb.createIndexes();

export default interviewFormDb;