const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/orderitems.js');

// Define an endpoint to get a specific order by order ID
router.get('/getorderitems/:orderId', (req, res) => {
    const orderId = parseInt(req.params.orderId);

    userQueries.getOrderItemsByOrderId(orderId) // Use the query function from userQueries
        .then((orderItems) => {
            if (orderItems.length > 0) {
                res.json(orderItems);
            } else {
                res.status(404).json({ error: "Order not found" });
            }
        })
        .catch((error) => {
            console.error("Error fetching order items:", error);
            res.status(500).json({ error: "Internal server error" });
        });
});

module.exports = router;
