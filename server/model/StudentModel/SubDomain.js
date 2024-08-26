import mongoose from "mongoose";

const { Schema, model } = mongoose;

const SubDomain = new Schema({
  subdomainName: String,
  domainId:String,
});

SubDomain.set("autoIndex", true);

const SubDomainDb = model("subdomain", SubDomain);
SubDomainDb.createIndexes();

export default SubDomainDb;
