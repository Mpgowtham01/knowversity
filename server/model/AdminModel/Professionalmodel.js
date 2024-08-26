import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ProfessionalmodelSchema = new Schema ({
    PackageName: String,
    JobSearch: Number,
    ProjectRequest: Number,
    Freelancing: Number,
    Training: Number,
    ActualPrice: Number,
    OfferPrice: Number,
});

ProfessionalmodelSchema.set("autoIndex", true);

const ProfessionalmodelDb = model("Professionalmodel",ProfessionalmodelSchema);
ProfessionalmodelDb.createIndexes();

export default ProfessionalmodelDb;