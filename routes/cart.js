const express = require('express');
const {
    addToCart,
    removeFromCart,
    getCartItems,
} = require('../controllers/cartController');
const { authenticateUser } = require('../middleware/authMiddleware');
const router = express.Router();

// Add item to cart
router.post('/add', authenticateUser, addToCart);

// Remove item from cart
router.delete('/remove/:id', authenticateUser, removeFromCart);

// Get cart items
router.get('/', authenticateUser, getCartItems);

module.exports = router;
