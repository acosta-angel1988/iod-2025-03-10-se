const express = require("express");
const Cat = require("../models/Cat");
const router = express.Router();

// GET all cats
router.get("/", async (req, res) => {
  const cats = await Cat.find();
  res.json(cats);
});

// POST a new cat
router.post("/", async (req, res) => {
  try {
    const newCat = new Cat(req.body);
    await newCat.save();
    res.status(201).json(newCat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;