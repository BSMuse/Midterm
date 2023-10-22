const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/orders');

router.get('/', (req, res) => {
  userQueries.getOrders()
    .then(dishes => {
      res.json({ orders });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/:id', (req, res) => {
    userQueries.getOrder()
      .then(dish => {
        res.json({ order });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


module.exports = router;
