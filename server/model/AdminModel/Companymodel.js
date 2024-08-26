import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CompanymodelSchema = new Schema ({
    PackageName: String,
    JobPost: Number,
    ProfileSearch: Number,
    ContractStaffing: Number,
    Freelancing: Number,
    Training: Number,
    ActualPrice: Number,
    OfferPrice: Number,
});

CompanymodelSchema.set("autoIndex", true);

const CompanymodelDb = model("Companymodel",CompanymodelSchema);
CompanymodelDb.createIndexes();

export default CompanymodelDb;