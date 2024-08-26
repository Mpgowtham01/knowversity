import mongoose from "mongoose";
const { Schema, model } = mongoose;

const tokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        // ref: "employerSignUpDb",
        unique: true,
    },
    token: { type: String, required: true },
},
    { timestamps: true },
);

const Tokens = model("token", tokenSchema);
export default Tokens
