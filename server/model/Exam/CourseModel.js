import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CourseList = new Schema({
  Course: String,
  technology: String,
  courseMode: String,
  duration: String,
  qualification: String,
  description: String,
  fees: String,
},
 { timestamps: true },
);

CourseList.method("toJSON", function () {
  const { _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

CourseList.set("autoIndex", true);

const CourseListDb = model("CourseList", CourseList);
CourseListDb.createIndexes();

export default CourseListDb;
