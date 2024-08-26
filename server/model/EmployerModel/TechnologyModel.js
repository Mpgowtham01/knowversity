import mongoose from "mongoose";

const { Schema, model } = mongoose;

const createtechnology = new Schema({
  technology: String,
});
createtechnology.set("autoIndex", true);

const createtechnologyFormDb = model("createtechnologyForm", createtechnology);
createtechnologyFormDb.createIndexes();

export default createtechnologyFormDb;
