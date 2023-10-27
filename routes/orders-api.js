const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/dishes');

router.use((req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect('/index');
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

router.post('/addOrderItem', (req, res) => {
  const { dishId, dishName, dishPrice } = req.body;
  // Insert these details into the ORDER_ITEMS table using SQL query.
  // Your query might look something like:
  // INSERT INTO ORDER_ITEMS (order_id, dish_id, quantity) VALUES (?, ?, ?)
  // Here you would use the Pool object from your connection.js to execute the query
});


module.exports = router;
