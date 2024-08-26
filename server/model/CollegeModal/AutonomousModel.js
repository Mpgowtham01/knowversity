import mongoose from "mongoose";

const { Schema, model } = mongoose;

const Autonomous = new Schema({
  Autonomous: String,
});

Autonomous.set("autoIndex", true);

const AutonomousDb = model("Autonomous", Autonomous);
AutonomousDb.createIndexes();

export default AutonomousDb;
