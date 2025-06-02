const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductsByCategory,
    getCategories
} = require('../controllers/productsController');

router.get('/', getAllProducts);
router.get('/category/:category', getProductsByCategory);
router.get('/categories', getCategories);

module.exports = router;