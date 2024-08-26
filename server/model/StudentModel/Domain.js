import mongoose from "mongoose";

const { Schema, model } = mongoose;

const Domain = new Schema({
  domainName: String,
});

Domain.set("autoIndex", true);

const DomainDb = model("domain", Domain);
DomainDb.createIndexes();

export default DomainDb;
