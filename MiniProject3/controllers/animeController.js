const Anime = require('../models/animeModel');

// Get all anime entries
exports.getAll = async (req, res) => {
try {
const animeList = await Anime.find();
res.json(animeList);
} catch (error) {
res.status(500).json({ message: 'Server error fetching anime list' });
}
};

// Get one anime by MongoDB _id
exports.getOne = async (req, res) => {
try {
const anime = await Anime.findById(req.params.id);
if (!anime) return res.status(404).json({ message: 'Anime not found' });
res.json(anime);
} catch (error) {
res.status(500).json({ message: 'Server error fetching anime' });
}
};

// Create a new anime entry
exports.create = async (req, res) => {
try {
const newAnime = await Anime.create(req.body);
res.status(201).json(newAnime);
} catch (error) {
res.status(400).json({ message: 'Error creating anime entry', error: error.message });
}
};

// Update existing anime entry
exports.update = async (req, res) => {
try {
const updatedAnime = await Anime.findByIdAndUpdate(req.params.id, req.body, {
new: true,
runValidators: true
});
if (!updatedAnime) return res.status(404).json({ message: 'Anime not found' });
res.json(updatedAnime);
} catch (error) {
res.status(400).json({ message: 'Error updating anime entry', error: error.message });
}
};

// Delete an anime entry
exports.delete = async (req, res) => {
try {
const deletedAnime = await Anime.findByIdAndDelete(req.params.id);
if (!deletedAnime) return res.status(404).json({ message: 'Anime not found' });
res.json({ message: 'Anime deleted successfully' });
} catch (error) {
res.status(500).json({ message: 'Server error deleting anime' });
}
};