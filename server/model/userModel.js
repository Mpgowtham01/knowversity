import mongoose from "mongoose";

const { Schema, model } = mongoose;

const user = new Schema(
  {
    name: String,
    email: String,
    companyName: String,
    password: String,
    forgetPasswordCode: Number,
    role: String,
    userId: mongoose.Schema.Types.ObjectId,
    RegistrationId: {
      type: String,
      unique: true,
    },
    verified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

user.set("autoIndex", true);

const Userdb = model("user", user);
Userdb.createIndexes();
export default Userdb;
