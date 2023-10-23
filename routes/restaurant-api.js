const express=require('express');
const router=express.Router();
const userQueries = require('../db/queries/resaturant');

router.get('/', (req, res) => {
    userQueries.getRestaurant()
      .then(dishes => {
        res.json({ restaurants });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  
  

  
  
  module.exports = router;
  
