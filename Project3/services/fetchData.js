const axios = require('axios');
const User = require('../models/dataModel');

const fetchAndStoreData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    await User.deleteMany(); // Optional: clear existing data
    await User.insertMany(response.data);
    console.log('✅ Data fetched and stored in the database');
  } catch (error) {
    console.error('❌ Error fetching data:', error.message);
  }
};

module.exports = fetchAndStoreData;