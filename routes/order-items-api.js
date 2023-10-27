const express = require('express');
const router = express.Router();

// Sample order data
const ordersData = [
    { orderNumber: 1, dishName: "Pizza", quantity: 2 },
    { orderNumber: 2, dishName: "Burger", quantity: 1 },
    { orderNumber: 3, dishName: "Salad", quantity: 3 }
];

// Define the "/api/getOrders" endpoint
router.get('/getorderitems', (req, res) => {
    // Return all ordersData as JSON
    res.json(ordersData);
});

// Define an endpoint to get a specific order by order ID
router.get('/getorderitems/:orderId', (req, res) => {
    const orderId = parseInt(req.params.orderId);
    
    // Find the specific order based on the order ID
    const order = ordersData.find(order => order.orderNumber === orderId);

    if (order) {
        res.json(order);
    } else {
        res.status(404).json({ error: "Order not found" });
    }
});

module.exports = router;
