require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');
const fetchAndStoreData = require('./services/fetchData');

const start = async () => {
  await connectDB();
  await fetchAndStoreData();

  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
};

start();