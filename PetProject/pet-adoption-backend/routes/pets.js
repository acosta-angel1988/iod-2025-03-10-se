import express from "express";
import { searchPets } from "../services/adoptapetService.js";

const router = express.Router();

// GET /api/pets/search?location=90001&type=dog
router.get("/search", async (req, res) => {
  try {
    const { location, type } = req.query;
    const data = await searchPets(location, type);
    res.json(data);
  } catch (error) {
    console.error("Error fetching pets:", error.message);
    res.status(500).json({ error: "Failed to fetch pets" });
  }
});

export default router;