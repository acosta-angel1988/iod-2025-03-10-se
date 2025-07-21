const express = require('express');
const router = express.Router();
const axios = require('axios');

const {
  getPostsByQuery,
  getPostById,
  searchPostsByTitle,
  updatePost
} = require('../controllers/postController');

router.get('/', getPostsByQuery);
router.get('/search', searchPostsByTitle);
router.get('/:id', getPostById);
router.put('/:id', updatePost);

module.exports = router;