import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CollegeList = new Schema({
  CollegeName: String,
  University_id: String,
});

CollegeList.set("autoIndex", true);

const CollegeListDb = model("collegeList", CollegeList);
CollegeListDb.createIndexes();

export default CollegeListDb;
