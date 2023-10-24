const express=require('express');
const router=express.Router();

const userQueries = require('../db/queries/restaurant');

router.get('/', (req, res) => {
    userQueries.getRestaurant()
      .then(restaurant => {
        res.json({ restaurant });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  
  module.exports = router;
  
