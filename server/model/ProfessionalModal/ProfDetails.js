import mongoose from "mongoose";

const { Schema, model } = mongoose;

const DetailsSchema = new Schema({
    companyName: String,
    desgination: String,
    fromDate: String,
    toDate: String,
    currentSalary: Number,
    expectedSalary: Number,
    noticePeriod: String,
    changeJob: String,
});

DetailsSchema.set("autoIndex", true);

const DetailsDb = model("Details", DetailsSchema);
DetailsDb.createIndexes();

export default DetailsDb;
