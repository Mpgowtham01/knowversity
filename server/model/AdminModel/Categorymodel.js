import mongoose from "mongoose";

const { Schema, model } = mongoose;
const categorySchema = new Schema({
  category: {
    type: String,
  },
});

const CategoryFieldDb = model('Categoryfield', categorySchema);
CategoryFieldDb.createIndexes();
export default CategoryFieldDb;
