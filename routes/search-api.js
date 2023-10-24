const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/resaturants');

// Common search route for both dishes and restaurants
router.get('/search', (req, res) => {
  const { type, query } = req.query;

  if (!type || !query) {
    return res.status(400).json({ error: 'Both "type" and "query" parameters are required.' });
  }

  if (type === 'dish') {

    userQueries.getDishes()      //getDishes function in database have query to fetch dishes available in restaurant
    .then(dishes => {
      res.json({ dishes });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

  } else if (type === 'restaurant') {

    userQueries.getRestaurants()
      .then(dishes => {
        res.json({ restaurants });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
}
});

module.exports = router;
