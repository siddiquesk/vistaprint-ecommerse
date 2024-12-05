const express = require('express');
const { placeOrder, getOrders } = require('../controllers/orderController');
const { authenticateUser } = require('../middleware/authMiddleware');
const router = express.Router();

// Place an order
router.post('/', authenticateUser, placeOrder);

// Get all orders for a user
router.get('/', authenticateUser, getOrders);

module.exports = router;

