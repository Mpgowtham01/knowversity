import mongoose from "mongoose";

const {Schema, model} = mongoose;

const subDomainProfile = new Schema({
    subDomain : String,
    domainId :String,
});

subDomainProfile.set("autoIndex", true);

const subDomainProfileFormDb = model("subDomainProfileForm", subDomainProfile);
subDomainProfileFormDb.createIndexes();

export default subDomainProfileFormDb;