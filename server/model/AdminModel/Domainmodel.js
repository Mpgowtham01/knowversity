import mongoose from "mongoose";

const { Schema, model } = mongoose;

const DomainSchema = new Schema({
  domainName: String,
});

DomainSchema.set("autoIndex", true);

const DomainDb = model("domainmodel", DomainSchema);
DomainDb.createIndexes();

export default DomainDb;
