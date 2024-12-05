const express = require('express');
const {
    getProducts,
    getProductById,
    getProductsByCategory,
} = require('../controllers/productController');
const router = express.Router();

// Fetch all products
router.get('/', getProducts);

// Fetch product by ID
router.get('/:id', getProductById);

// Fetch products by category
router.get('/category/:category', getProductsByCategory);

module.exports = router;
