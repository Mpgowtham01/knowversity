import mongoose from "mongoose";

const { Schema, model } = mongoose;

const qualificationSchema = new Schema({
    qualification: String,
    educationType: String,
    university: String,
    universityAddress: String,  
    universityMaster: String,
    universityAddressMaster: String,
    schoolX:String,
    percentageX: String,
    yearX:Number,
    schoolXII: String,
    percentageXII:String,
    yearXII:Number,
    collegeNameB: String,
    percentageB:String,
    yearB: Number,
    collegeNameM:String,
    percentageM:String,
    yearM: Number,
   
});

qualificationSchema.set("autoIndex", true);

const qualificationDB = model("qualification", qualificationSchema);
qualificationDB.createIndexes();

export default qualificationDB;
