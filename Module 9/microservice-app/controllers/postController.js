const axios = require("axios");

const BASE_URL = process.env.JSON_PLACEHOLDER_URL;

// GET /posts?userId=1
const getPostsByQuery = async (req, res) => {
  try {
    const { userId } = req.query;
    const response = await axios.get(BASE_URL, {
      params: userId ? { userId } : {},
    });
    res.status(200).json({ result: 200, data: response.data });
  } catch (error) {
    res.status(500).json({ result: 500, error: error.message });
  }
};

// GET /posts/:id
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${BASE_URL}/${id}`);
    res.status(200).json({ result: 200, data: response.data });
  } catch (error) {
    res.status(500).json({ result: 500, error: error.message });
  }
};

// GET /posts/search?text=qui
const searchPostsByTitle = async (req, res) => {
  try {
    const { text } = req.query;
    const response = await axios.get(BASE_URL);
    const filteredPosts = response.data.filter((post) =>
      post.title.toLowerCase().includes(text.toLowerCase())
    );
    res.status(200).json({ result: 200, data: filteredPosts });
  } catch (error) {
    res.status(500).json({ result: 500, error: error.message });
  }
};

// PUT /posts/:id
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const response = await axios.put(`${BASE_URL}/${id}`, payload);
    res.status(200).json({ result: 200, data: response.data });
  } catch (error) {
    res.status(500).json({ result: 500, error: error.message });
  }
};

module.exports = {
  getPostsByQuery,
  getPostById,
  searchPostsByTitle,
  updatePost,
};