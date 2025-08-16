import mongoose from "mongoose";

const PetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ["dog", "cat"], required: true },
    breed: { type: String, required: true },
    color: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"], required: true },
    location: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    image: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("Pet", PetSchema);