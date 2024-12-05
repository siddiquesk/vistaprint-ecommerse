const mongoose = require('mongoose');

// Order Schema
const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        },
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'pending' },  // Can be 'pending', 'shipped', 'delivered'
    shippingAddress: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Export the model
module.exports = mongoose.model('Order', orderSchema);
