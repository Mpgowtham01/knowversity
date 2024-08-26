import mongoose from "mongoose";

const { Schema, model } = mongoose;

const BlogSchema = new Schema({
  Title: String,
  Description: String,
  Image: String,
});

BlogSchema.set("autoIndex", true);

const BlogDb = model("Blog", BlogSchema);
BlogDb.createIndexes();

export default BlogDb;
