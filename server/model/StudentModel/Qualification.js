import mongoose from "mongoose";

const { Schema, model } = mongoose;

const QualificationInfo = new Schema({
  userId: mongoose.Schema.Types.ObjectId,

  //  course: String,
  // semester:String,
  //  arrear: String,
  xboard: String,
  xschool: String,
  xper: String,
  xmajor: String,
  xyop: String,
  xiiboard: String,
  xiischool: String,
  xiiper: String,
  xiimajor: String,
  xiiyop: String,
  guniversity: String,
  gcollege:String,
  gmajor: String,
  gper: String,
  gyop: String,
  //  pgboard: String,
  pguniversity: String,
  pgcollege: String,
  pgmajor: String,
  pgper: String,
  pgyop: String,
 
});
QualificationInfo.set("autoIndex", true);

const QualificationDb = model("Qualification", QualificationInfo);
QualificationDb.createIndexes();

export default QualificationDb;
