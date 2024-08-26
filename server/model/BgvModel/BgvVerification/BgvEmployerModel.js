import mongoose from "mongoose";

const employerVericationSchema = new mongoose.Schema({
    company_name: {
        type: String,
        require: false
    },
    jobTitle: {
        type: String,
        require: false
    },
    experience: {
        type: String,
        require: false
    },
    year: [{
        from: {
            type: String,
            require: false
        },
        to: {
            type: String,
            require: false
        },
    }],
    verification: {
        type: String,
        require: false
    },
    remark: {
        type: String,
        require: false
    }
})

const BgvEmployerVerificationDB = mongoose.model("BgvEmployerVerificationDB", employerVericationSchema)
export default BgvEmployerVerificationDB
