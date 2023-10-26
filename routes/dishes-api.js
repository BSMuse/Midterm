const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/dishes.js');

router.get('/', (req, res) => {
  userQueries
    .getDishes(req.query)
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
