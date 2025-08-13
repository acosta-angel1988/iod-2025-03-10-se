import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import petsRoute from "./routes/pets.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/pets", petsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});