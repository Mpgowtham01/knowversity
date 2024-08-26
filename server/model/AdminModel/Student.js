import mongoose from "mongoose";

const { Schema, model } = mongoose;

const StudentSchema = new Schema ({
    PackageName: String,
    ProjectRequest: Number,
    Freelancing: Number,
    UploadVideo: Number,
    ActualPrice: Number,
    OfferPrice: Number,
});

StudentSchema.set("autoIndex", true);

const StudentDb = model("Student", StudentSchema);
StudentDb.createIndexes();

export default StudentDb;