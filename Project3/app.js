const express = require('express');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
app.use(express.json());
app.use('/api/users', dataRoutes);

module.exports = app;