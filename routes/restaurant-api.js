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
    const restaurantId=req.params.id;
      userQueries.getRestaurant(restaurantId)
        .then(restaurant => {
          if (!restaurant) {
            res.status(404).json({ error: 'Restaurant not found' });
          } else {
            res.json({ restaurant });
          }
          res.json({ restaurant });
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    });
  
  
  module.exports = router;
  
