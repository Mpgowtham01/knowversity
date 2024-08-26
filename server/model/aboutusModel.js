import mongoose from "mongoose";

const { Schema, model } = mongoose;

const aboutusSchema = new Schema({
    title: String,
    description: String,
    name: String,
    Carousel: String,
});

aboutusSchema.set("autoIndex", true);

const aboutusDb = model("aboutus", aboutusSchema);
aboutusDb.createIndexes();

export default aboutusDb;
