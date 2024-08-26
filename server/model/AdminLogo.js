import mongoose from "mongoose";

const { Schema, model } = mongoose;

const logoSchema = new Schema({
    logo: String,
   
});


const AdminLogoDB = model("AdminLogo", logoSchema);

export default AdminLogoDB;