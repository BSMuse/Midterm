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

router.post('/add-to-order-items', (req, res) => {
  const newItem = JSON.parse(req.body.newItem);
  const { order_id, dish_id, quantity } = newItem;

  userQueries.insertIntoOrderItems(order_id, dish_id, quantity)
    .then((result) => {
      res.status(201).json({ message: 'Item successfully added to ORDER_ITEMS', result });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to add item to ORDER_ITEMS', details: error.message });
    });
});

module.exports = router;
