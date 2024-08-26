import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Blog_Title: {
    type: String,
    required: false,
  },
  Domain: {
    type: String,
    required: false,
  },
  Subdomain: {
    type: String,
    required: false,
  },
  AOI: {
    type: String,
    required: false,
  },
  Tag: {
    type: String,
    required: false,
  },
  Blog_description: {
    type: String,
    required: false,
  },
  questions: {
    type: String,
    required: false,
  },
});

// userSchema.method("toJSON", function () {
//   const { _id, ...object } = this.toObject();
//   object.id = _id;
//   return object;
// });
  
userSchema.set("autoIndex", true);

const Userdb = mongoose.model("Adminblog", userSchema);

export default Userdb;
