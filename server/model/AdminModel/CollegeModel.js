import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CollegeSchema = new Schema({
  collegeName: String,
  university_id: mongoose.Schema.Types.ObjectId,
});

CollegeSchema.set("autoIndex", true);

const AdminCollege = model("CollegeFields", CollegeSchema);
AdminCollege.createIndexes();

export default AdminCollege;
