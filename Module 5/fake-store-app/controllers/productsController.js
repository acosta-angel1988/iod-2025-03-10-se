const axios = require('axios');

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
    }
};

// Get products by category
const getProductsByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching category products' });
    }
};

// Get all categories
const getCategories = async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching categories' });
    }
};

module.exports = {
    getAllProducts,
    getProductsByCategory,
    getCategories
};