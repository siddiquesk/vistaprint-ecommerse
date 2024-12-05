const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const { authenticateUser } = require('../middleware/authMiddleware');
const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);

// Get user profile (requires authentication)
router.get('/profile', authenticateUser, getUserProfile);

module.exports = router;

