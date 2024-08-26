import mongoose from "mongoose";

const { Schema, model } = mongoose;

const Field = new Schema({
    fieldName: String,
    subdomainId:String,
});

Field.set("autoIndex", true);

const FieldDb = model("field", Field);
FieldDb.createIndexes();

export default FieldDb;
