const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/dishes');


router.get('/:id', (req, res) => {
  const dishName = req.params.id;
  console.log("dish name is", dishName);
  userQueries
    .getDishById(dishName)
    .then((dish) => {
      if (!dish) {
        res.status(404).json({ error: 'Dish not found' });
      } else {
        res.json({ dish });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

router.get('/', (req, res) => {
  userQueries
    .getDishes()
    .then((dishes) => {
      res.json({ dishes });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});



module.exports = router;
