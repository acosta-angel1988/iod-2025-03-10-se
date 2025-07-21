const express = require('express');
const path = require('path');
const calculatorRoutes = require('./routes/calculatorRoutes');

const app = express();
const PORT = 3000;

// Serve frontend
app.use(express.static(path.join(__dirname, 'public')));

// Mount routes
app.use('/', calculatorRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Calculator app running at http://localhost:${PORT}`);
});