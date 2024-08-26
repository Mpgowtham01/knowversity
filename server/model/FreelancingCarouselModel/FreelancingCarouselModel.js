import mongoose from "mongoose";

const { Schema, model } = mongoose;

const freelancingCarousel = new Schema({
  title: String,
  image: String,
});

const freelancingCarouselDB = model("freelancingCarousel", freelancingCarousel);
freelancingCarouselDB.createIndexes();

export default freelancingCarouselDB;
