import mongoose from 'mongoose';
const { Schema } = mongoose;

const instituteSchema = new mongoose.Schema({
    instituteName: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    // city: {
    //     type: String,
    //     required: true,
    // },
    address: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
    instituteType: {
        type: String,
        required: true,
    },
    contactPerson: {
        type: String,
        required: true,
    },

    designation: {
        type: String,
        required: true,
    },

    websiteUrl: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: Number,
        required: true,
    },
    courses:{
    type: [String],
  },
}, { timestamps: true }
);

export default mongoose.model('Institute', instituteSchema)
