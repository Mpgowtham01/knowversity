import mongoose from "mongoose";

const { Schema, model } = mongoose;

const VendormodelSchema = new Schema ({
    FetchClients: String,
    BusinessPromotion: Number,
    Freelancing: Number,
    Advertisment: Number,
    Training: Number,
    ActualPrice: Number,
    OfferPrice: Number,
});

VendormodelSchema.set("autoIndex", true);

const VendormodelDb = model("Vendormodel",VendormodelSchema);
VendormodelDb.createIndexes();

export default VendormodelDb;