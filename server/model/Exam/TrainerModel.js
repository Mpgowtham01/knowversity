
import mongoose from "mongoose"

const { Schema, model } = mongoose

const TrainerList = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        // unique:true,
    },
    phoneNumber: {
        type: String
    },
    Qualification: {
        type: String
    },
    Experience: {
        type: String
    },
    Expertise: {
        type: String
    },

},
    { timestamps: true },
)

const TrainerListDB = model("TrainerListDB", TrainerList)
export default TrainerListDB