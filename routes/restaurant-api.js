const express=require('express');
const router=express.Router();
const userQueries = require('../db/queries/resaturants');

router.get('/', (req, res) => {
    userQueries.getRestaurants()
      .then(dishes => {
        res.json({ restaurants });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  
  router.get('/:id', (req, res) => {
      userQueries.getRestaurant()
        .then(dish => {
          res.json({ restaurant });
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    });
  
  
  module.exports = router;
  
