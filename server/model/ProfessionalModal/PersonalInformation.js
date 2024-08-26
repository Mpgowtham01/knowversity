import mongoose from "mongoose";

const { Schema, model } = mongoose;

const personalInfoSchema = new Schema({
     firstName: String,
    lastName: String,
    phoneNumber: String,
    dateofBirth: String,  
    maritalStatus: String,
    gender: String,
    email:String,
    address: String,
    country:String,
    state: String,
    district:String,
});

personalInfoSchema.set("autoIndex", true);

const personalInfoDb = model("PersonalInfo", personalInfoSchema);
personalInfoDb.createIndexes();

export default personalInfoDb;
