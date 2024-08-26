import mongoose from "mongoose";

const empBgvSchema = new mongoose.Schema({
    name: {
        type: String,
        require: false
    },
    lastname: {
        type: String,
        require: false
    },
    dob: {
        type: String,
        require: false
    },
    gender: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: false
    },
    panNo: {
        type: String,
        require: false
    },
    Adhaar: {
        type: String,
        require: false
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
    educationVerification: [{
        education:
            [{
                qualification: {
                    type: String,
                    require: false
                },
                intitute_Name: {
                    type: String,
                    require: false
                },
                eduDocuments: {
                    type: String,
                    require: false
                },
                Verified: {
                    type: String,
                    require: false
                }
            }],

    }],

    employerVerification: [{
        employer: [{
            company_name: {
                type: String,
                require: false
            },
            experience: {
                type: String,
                require: false
            },
            empDocuments: {
                type: String,
                require: false
            },
            Verified: {
                type: String,
                require: false
            }
        }],

    }],
    policeVerification: {
        police: [{
            permanent_address: {
                type: String,
                require: false
            },
            police: {
                type: String,
                require: false
            },
            Verified: {
                type: String,
                require: false
            }
        }],

    },
    Verification: [{
        education_Verification: {
            type: String,
            require: false
        },
        employer_Verification: {
            type: String,
            require: false
        },
        police_Verification: {
            type: String,
            require: false
        },
    }]
},
    { timestamps: true },
)

const empBgvDB = mongoose.model("empBgvDB", empBgvSchema)

export default empBgvDB