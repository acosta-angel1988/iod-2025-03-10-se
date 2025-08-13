require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');
const fetchAndStoreAnime = require('./services/fetchData');

const startServer = async () => {
  try {
    await connectDB();
    await fetchAndStoreAnime();

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Server failed to start:', error.message);
    process.exit(1);
  }
};

startServer();