const Cart = require('../models/cart');

// Add item to cart
const addToCart = async (req, res) => {
    const { productId, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ userId: req.user._id });

        if (!cart) {
            cart = new Cart({ userId: req.user._id, items: [] });
        }

        const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId);

        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ productId, quantity });
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error adding to cart' });
    }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user._id });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        cart.items = cart.items.filter((item) => item._id.toString() !== req.params.id);
        await cart.save();

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error removing from cart' });
    }
};

// Get cart items
const getCartItems = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user._id }).populate('items.productId');
        if (!cart) {
            return res.status(404).json({ message: 'Cart is empty' });
        }

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cart items' });
    }
};

module.exports = {
    addToCart,
    removeFromCart,
    getCartItems,
};
