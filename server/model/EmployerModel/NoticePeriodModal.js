import mongoose from "mongoose";

const {Schema, model} = mongoose;

const noticePeriod = new Schema({
    noticePeriod: String,
});
noticePeriod.set("autoIndex", true);

const noticePeriodFormDb = model("noticePeriodForm", noticePeriod);
noticePeriodFormDb.createIndexes();

export default noticePeriodFormDb;