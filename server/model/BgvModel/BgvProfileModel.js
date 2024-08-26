import mongoose from "mongoose";

const bgvProfileSchema = new mongoose.Schema({
    companyName: {
        type: String,
        require: false
    },
    companyType: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: false
    },
    EstablishedYear: {
        type: String,
        require: false
    },
    domain: {
        type: String,
        require: false
    },
    subDomain: {
        type: String,
        require: false
    },
    services: {
        subServices: [{
            type: String,
            require: false
        }]
    },
    country: {
        type: String,
        require: false
    },
    state: {
        type: String,
        require: false
    },
    city: {
        type: String,
        require: false
    },
    pincode: {
        type: String,
        require: false
    },
    address: {
        type: String,
        require: false
    },
    discription: {
        type: String,
        require: false
    },

    linkedIn: {
        type: String,
        require: false
    },
    facebook: {
        type: String,
        require: false
    },
    youTube: {
        type: String,
        require: false
    },
    website: {
        type: String,
        require: false
    },
    twitter: {
        type: String,
        require: false
    },
},
    { timestamps: true },
)

const bgvProfileDB = mongoose.model("BgvProfileDB", bgvProfileSchema)
export default bgvProfileDB