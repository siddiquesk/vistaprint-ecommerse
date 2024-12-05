const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoutes = require('./routes/product'); // Example route import
const userRoutes = require('./routes/user'); // Example route import
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');

// Load environment variables
dotenv.config();



// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

