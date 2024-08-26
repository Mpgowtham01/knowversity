import mongoose from "mongoose";

const educationVericationSchema = new mongoose.Schema({
    qualification: {
        type: String,
        require: false
    },
    institute_name: {
        type: String,
        require: false
    },
    mark: {
        type: String,
        require: false
    },
    passYear: {
        type: String,
        require: false
    },
    verification: {
        type: String,
        require: false
    }
})

const BgvEductionVerificationDB = mongoose.model("BgvEductionVerificationDB", educationVericationSchema)
export default BgvEductionVerificationDB
