const express = require('express');
const animeRoutes = require('./routes/animeRoutes');

const app = express();

app.use(express.json());
app.use('/api/anime', animeRoutes);

module.exports = app;