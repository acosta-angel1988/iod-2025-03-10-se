import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import petRoutes from "./routes/pets.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
});

// Routes
app.use("/pets", petRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("🐾 Pet Adoption API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});