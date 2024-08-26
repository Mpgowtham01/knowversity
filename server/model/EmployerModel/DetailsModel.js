import mongoose from "mongoose";

const {Schema, model} = mongoose;

const details = new Schema({
    Name: String,
    Technology: Array,
    Gender: String,
    Position: String,
    Salary: Number,
    JobType: String,
});
details.set("autoIndex", true);

const detailsFormDb = model("detailsForm", details);
detailsFormDb.createIndexes();

export default detailsFormDb;