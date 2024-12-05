const Order = require('../models/order');

// Place an order
const placeOrder = async (req, res) => {
    try {
        const { items, totalAmount } = req.body;

        const newOrder = new Order({
            userId: req.user._id,
            items,
            totalAmount,
        });

        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error placing order' });
    }
};

// Get orders by user
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user._id }).populate('items.productId');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders' });
    }
};

module.exports = {
    placeOrder,
    getOrders,
};
