import Mongoose from "mongoose";

const { Schema, model } = Mongoose;

const Offer = new Schema({
  Photo: String,
  Promocode: String,
  Category: String,
  StartDate: String,
  EndDate: String,
  Description: String,
});

Offer.set("autoIndex", true);

const OfferDb = model("Offer", Offer);

export default OfferDb;
