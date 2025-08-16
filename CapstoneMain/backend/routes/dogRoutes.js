const express = require("express");
const Dog = require("../models/Dog");
const router = express.Router();

// GET all dogs
router.get("/", async (req, res) => {
  const dogs = await Dog.find();
  res.json(dogs);
});

// POST a new dog
router.post("/", async (req, res) => {
  try {
    const newDog = new Dog(req.body);
    await newDog.save();
    res.status(201).json(newDog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;