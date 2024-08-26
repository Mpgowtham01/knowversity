import mongoose from "mongoose";

const { Schema, model } = mongoose;
const contactusSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phonenumber: { type: String, required: true },
    message: { type: String, required: true },

})

contactusSchema.set("autoIndex", true);

const contactusDb = model("contactus", contactusSchema);
contactusDb.createIndexes();

export default contactusDb;