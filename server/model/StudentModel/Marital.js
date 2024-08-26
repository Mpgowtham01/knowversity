import mongoose from "mongoose";

const { Schema, model } = mongoose;

const Marital = new Schema({
  Marital: String,
});

Marital.set("autoIndex", true);

const MaritalDb = model("Marital", Marital);
MaritalDb.createIndexes();

export default MaritalDb;