import mongoose from "mongoose";

const { Schema, model } = mongoose;

const TechnologyList = new Schema({
  // id:Int16Array,
  Technology: String,
  position: String,
  version: String,
  description: String,
  frameWork: [{
    type: String,
  }],
  logo: String,
},
{ timestamps: true },
);

TechnologyList.method("toJSON", function () {
  const { _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

TechnologyList.set("autoIndex", true);

const TechnologyListDb = model("TechnologyList", TechnologyList);
TechnologyListDb.createIndexes();

export default TechnologyListDb;
