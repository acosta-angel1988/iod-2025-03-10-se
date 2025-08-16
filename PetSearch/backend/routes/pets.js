import express from "express";
import Pet from "../models/Pet.js";

const router = express.Router();

// GET all pets or filter
router.get("/", async (req, res) => {
    try {
        const filters = {};
        const { type, location, breed, color, gender } = req.query;

        if (type) filters.type = type;
        if (location) filters.location = { $regex: location, $options: "i" };
        if (breed) filters.breed = { $regex: breed, $options: "i" };
        if (color) filters.color = { $regex: color, $options: "i" };
        if (gender) filters.gender = gender;

        const pets = await Pet.find(filters);
        res.json(pets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET pet by ID
router.get("/:id", async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);
        if (!pet) return res.status(404).json({ message: "Pet not found" });
        res.json(pet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST add new pet
router.post("/", async (req, res) => {
    try {
        const newPet = new Pet(req.body);
        const savedPet = await newPet.save();
        res.status(201).json(savedPet);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT update pet
router.put("/:id", async (req, res) => {
    try {
        const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPet);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE pet
router.delete("/:id", async (req, res) => {
    try {
        await Pet.findByIdAndDelete(req.params.id);
        res.json({ message: "Pet removed" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;