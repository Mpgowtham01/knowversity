import mongoose from "mongoose";

const { Schema, model } = mongoose;

const SubDomainSchema = new Schema({
    SubdomainName:String,
    domainId:String,
});

SubDomainSchema.set("autoIndex", true);

const SubDomainDb = model("SubDomain", SubDomainSchema);
SubDomainDb.createIndexes();

export default SubDomainDb;
