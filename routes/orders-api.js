const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/dishes');


router.use((req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect('index');
  }
  next();
});

// Retrieve a specific order by ID
router.get('/:id', (req, res) => {
  const orderId = req.params.id;
  userQueries.getOrder(orderId)
    .then((order) => {
      res.json({ order });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


// Create a new order
router.post('/', async (req, res) => {
  try {
    // Validate and sanitize the order data from the request body
    const orderData = req.body;

    // Call the appropriate function from userQueries to create a new order
    const newOrder = await userQueries.createOrder(orderData);

    res.status(201).json({ order: newOrder });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
