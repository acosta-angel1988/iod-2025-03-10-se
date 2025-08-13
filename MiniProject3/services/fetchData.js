const axios = require('axios');
const Anime = require('../models/animeModel');

const fetchAndStoreAnime = async () => {
  try {
    const response = await axios.get('https://kitsu.io/api/edge/trending/anime');

    const formattedAnime = response.data.data.map(item => ({
      kitsuId: item.id,
      title: item.attributes.titles.en_jp || item.attributes.titles.en || 'Untitled',
      synopsis: item.attributes.synopsis,
      posterImage: item.attributes.posterImage?.original || '',
      averageRating: item.attributes.averageRating,
      startDate: item.attributes.startDate,
      endDate: item.attributes.endDate,
      episodeCount: item.attributes.episodeCount,
      ageRating: item.attributes.ageRating
    }));

    await Anime.deleteMany();
    await Anime.insertMany(formattedAnime);

    console.log('✅ Trending anime data fetched and stored.');
  } catch (error) {
    console.error('❌ Error fetching anime data:', error.message);
  }
};

module.exports = fetchAndStoreAnime;