import mongoose from "mongoose";

const { Schema, model } = mongoose;

const studentBlog = new Schema({
  studentName: String,
  email: String,
  registerId: String,
  domain: String,
  subdomain: String,
  Image: String,
  Tag: String,
  description: String,
  status: Boolean,
  blogImage: String,
});

studentBlog.set("autoIndex", true);

const BlogDb = model("studentBlog", studentBlog);
BlogDb.createIndexes();

export default BlogDb;
