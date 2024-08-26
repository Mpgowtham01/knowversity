import Mongoose from "mongoose";

const { Schema, model } = Mongoose;

const Seminor = new Schema({
    SeminorTitle: String,
    technology: Array,
    time: String,
    fromdate: String,
    todate: String,
    audience: String,
    contactPerson: String,
    contactNumber: String,
    SeminorMode: String,
    registrationLink: String,
    about: String,
    fees: String,
});

Seminor.set("autoIndex", true);

const SeminorDb = model("Seminor", Seminor); 

export default SeminorDb;
