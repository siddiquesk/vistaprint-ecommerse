const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
});

// Password hashing before saving user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();  // Only hash password if it's modified
    this.password = await bcrypt.hash(this.password, 10);  // Hash password
    next();
});

// Export the model
module.exports = mongoose.model('User', userSchema);

