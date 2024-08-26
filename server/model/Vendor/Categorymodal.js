import mongoose from "mongoose";

const { Schema, model } = mongoose;

const Category = new Schema({
    categoryName: String,
});

Category.set("autoIndex", true);

const CategoryDb = model("category", Category);
CategoryDb.createIndexes();

export default CategoryDb;