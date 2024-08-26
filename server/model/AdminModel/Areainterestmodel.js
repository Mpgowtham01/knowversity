import mongoose from "mongoose";

const { Schema, model } = mongoose;

const Areaofinterest = new Schema({
    AreaofinterestName: String,
    SubdomainId:String
});

Areaofinterest.set("autoIndex", true);

const AreaofinterestDb = model("Areaofinterest", Areaofinterest);
AreaofinterestDb.createIndexes();

export default AreaofinterestDb;