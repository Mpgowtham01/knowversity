import mongoose from "mongoose";

const {Schema, model} = mongoose;

const skill = new Schema({
    skill: String,
});
skill.set("autoIndex", true);

const skillDb = model("skill", skill);
skillDb.createIndexes();

export default skillDb;