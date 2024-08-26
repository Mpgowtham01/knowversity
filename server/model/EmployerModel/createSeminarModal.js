import mongoose from "mongoose";
const { Schema } = mongoose;

const CreateSeminarSchema = new Schema(
  {
    // insitituteName: {
    //         type: String,
    //         required: true,
    //     },
    //     state: {
    //         type: String,
    //         required: true,
    //     },
    //     district: {
    //         type: String,
    //         required: true,
    //     },
    //     city: {
    //         type: String,
    //         required: true,
    //     },
    //     address: {
    //         type: String,
    //         required: true,
    //     },
    //     pincode: {
    //         type: Number,
    //         required: true,
    //     },
    //     instituteType: {
    //         type: String,
    //         required: true,
    //     },
    //     contactPerson: {
    //         type: String,
    //         required: true,
    //     },

    //     designation: {
    //         type: String,
    //         required: true,
    //     },

    //     websiteUrl: {
    //         type: String,
    //         required: true,
    //     },
    //     email: {
    //         type: String,
    //         required: true,
    //     },
    //     contactNumber: {
    //         type: Number,
    //         required: true,
    //     },
    seminarTitle: String,
    time: String,
    technology: String,
    audience: String,
    contactPerson: String,
    contactNumber: Number,
    mode: String,
    registrationLink: String,
    // brochure: Object,
    brochure: String,
    fromdate: Number,
    todate: Number,
    about: String,
    fees: String,
  },
  // { timestamps: true }
);

export default mongoose.model("createSeminar", CreateSeminarSchema);
