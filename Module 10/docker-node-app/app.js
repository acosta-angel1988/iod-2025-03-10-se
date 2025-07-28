// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello from a Node.js Docker container!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});