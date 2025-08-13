const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
kitsuId: String,
title: String,
synopsis: String,
posterImage: String,
averageRating: String,
startDate: String,
endDate: String,
episodeCount: Number,
ageRating: String
});

module.exports = mongoose.model('Anime', animeSchema);