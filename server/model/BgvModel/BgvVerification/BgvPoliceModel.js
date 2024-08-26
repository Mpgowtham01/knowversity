import mongoose from "mongoose";

const ploiceVericationSchema = new mongoose.Schema({
    criminal_record: {
        type: String,
        require: false
    },
    status: {
        type: String,
        require: false
    },
    remark: {
        type: String,
        require: false
    },

    verification: {
        type: String,
        require: false
    },

})

const BgvPoliceVerificationDB = mongoose.model("BgvPoliceVerificationDB", ploiceVericationSchema)
export default BgvPoliceVerificationDB
