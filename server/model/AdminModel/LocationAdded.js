import mongoose from "mongoose";

const { Schema, model } = mongoose;

const locationSchema = new Schema({
  locationName: String,
});

locationSchema.set("autoIndex", true);

const LocationFields = model("locationAdded", locationSchema);
LocationFields.createIndexes();

export default LocationFields;
