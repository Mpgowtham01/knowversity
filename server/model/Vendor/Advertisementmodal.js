import Mongoose from "mongoose";

const { Schema, model } = Mongoose;

const Advertisement = new Schema({
  companyName: String,
  websiteLink: String,
  advertisementTag: String,
});

Advertisement.set("autoIndex", true);

const AdvertisementDb = model("advertisement", Advertisement);

export default AdvertisementDb;
