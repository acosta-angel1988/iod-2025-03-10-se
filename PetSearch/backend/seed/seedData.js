import mongoose from "mongoose";
import dotenv from "dotenv";
import Pet from "../models/Pet.js";

dotenv.config();

const seedPets = [
    {
        name: "Buddy",
        type: "dog",
        breed: "Labrador",
        color: "Yellow",
        gender: "male",
        location: "New York",
        age: 3,
        email: "buddy@example.com",
        phone: "555-123-4567",
        image: "https://placedog.net/500"
    },
    {
        name: "Mittens",
        type: "cat",
        breed: "Siamese",
        color: "Cream",
        gender: "female",
        location: "Los Angeles",
        age: 2,
        email: "mittens@example.com",
        phone: "555-987-6543",
        image: "https://placekitten.com/500/500"
    },
    {
        name: "Max",
        type: "dog",
        breed: "German Shepherd",
        color: "Black and Tan",
        gender: "male",
        location: "Chicago",
        age: 4,
        email: "max@example.com",
        phone: "555-456-7890",
        image: "https://placedog.net/501"
    },
    {
        name: "Luna",
        type: "cat",
        breed: "Persian",
        color: "White",
        gender: "female",
        location: "Houston",
        age: 1,
        email: "luna@example.com",
        phone: "555-111-2222",
        image: "https://placekitten.com/501/500"
    }
];

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async () => {
    console.log("🌱 Seeding database...");
    await Pet.deleteMany({});
    await Pet.insertMany(seedPets);
    console.log("✅ Data seeded successfully!");
    mongoose.connection.close();
})
.catch(err => {
    console.error("❌ Seed error:", err);
    mongoose.connection.close();
});