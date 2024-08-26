import mongoose from "mongoose";

const { Schema, model } = mongoose;

const Score = new Schema({
  UserId: String,
  Role: String,
  Name: String,
  Technology: String,
  Week: String,
  Score: String,
  // Id: String,
});

Score.set("autoIndex", true);

const ScoreDb = model("Student_Score", Score);
ScoreDb.createIndexes();

export default ScoreDb;
