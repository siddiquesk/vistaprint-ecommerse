const Product = require('../models/product');

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
};

// Get product by ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product' });
    }
};

// Get products by category
const getProductsByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const products = await Product.find({ category });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching category products' });
    }
};

module.exports = {
    getProducts,
    getProductById,
    getProductsByCategory,
};
