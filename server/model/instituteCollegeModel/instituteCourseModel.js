import mongoose from "mongoose";

const { Schema } = mongoose;

const instituteCourseSchema = new mongoose.Schema({
    graduateLevel: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    major: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    modeOfStudy: {
        type: String,
        required: true,
    },
    courseDuration: {
        type: Number,
        required: true,
    },
    feesDisclose: {
        type: Boolean,
        default: false,
    },
    feesPerAnnum: {
        type: String,
        required: false,
    },
    

    
},{ timestamps:true }
);


export default mongoose.model("InstituteCourse", instituteCourseSchema);

