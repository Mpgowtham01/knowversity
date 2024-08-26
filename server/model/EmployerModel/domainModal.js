import mongoose from "mongoose";

const {Schema, model} = mongoose;

const domainProfile = new Schema({
    domain: String,
});
domainProfile.set("autoIndex", true);

const domainProfileFormDb = model("domainProfileForm", domainProfile);
domainProfileFormDb.createIndexes();

export default domainProfileFormDb;