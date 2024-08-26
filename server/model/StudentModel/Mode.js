import mongoose from "mongoose";

const { Schema, model } = mongoose;

const Mode = new Schema({
  Mode: String,
});

Mode.set("autoIndex", true);

const ModeDb = model("Mode", Mode);
ModeDb.createIndexes();

export default ModeDb;