const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/orders');

router.get('/', (req, res) => {
  userQueries.getOrders()
    .then(orders => {
      res.json({ orders });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/:id', (req, res) => {
  const orderId=req.params.id;
    userQueries.getOrder(orderId)
      .then(order => {
        res.json({ order });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get('/:id/insert', (req, res) => {
    const orderId=req.params.id;
    userQueries.insertOrder(orderId)
      .then(()=> {
       res.json("Added to cart");  
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
module.exports = router;
