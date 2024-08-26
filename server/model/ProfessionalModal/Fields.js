import mongoose from "mongoose";

const { Schema, model } = mongoose;

const FieldsSchema = new Schema({
    FieldsName:String,
    SubdomainId:String,
});

FieldsSchema.set("autoIndex", true);

const FieldsDb = model("Fields", FieldsSchema);
FieldsDb.createIndexes();

export default FieldsDb;
