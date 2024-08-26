import mongoose from "mongoose";

const { Schema, model } = mongoose;

const Subdomain = new Schema({
    SubdomainName: String,
    DomainId: String
});

Subdomain.set("autoIndex", true);

const SubdomainDb = model("Subdomain", Subdomain);
SubdomainDb.createIndexes();

export default SubdomainDb;