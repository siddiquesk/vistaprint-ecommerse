const mongoose = require('mongoose');

// Cart Schema
const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true, default: 1 },
            price: { type: Number, required: true },
        },
    ],
    totalAmount: { type: Number, required: true },
});

// Export the model
module.exports = mongoose.model('Cart', cartSchema);
