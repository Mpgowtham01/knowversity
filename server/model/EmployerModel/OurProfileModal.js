import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ourProfileInfo = new Schema({
  userId: mongoose.Schema.Types.ObjectId,
  companyName: String,
  companyType: String,
  gst: String,
  field: String,
  domain: String,
  subDomain: String,
  country: String,
  state: String,
  district: String,
  city: String,
  pincode: Number,
  website: String,
  Linkedin: String,
  facebook: String,
  skype: String,
  team: String,
  instagram: String,
  youtube: String,
  address: String,
  companyLogo: String
});
ourProfileInfo.set("autoIndex", true);

const ourProfileFormDb = model("ourProfileForm", ourProfileInfo);
ourProfileFormDb.createIndexes();

export default ourProfileFormDb;
