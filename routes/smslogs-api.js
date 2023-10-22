const express=require('express');
const router=express.Router();
const userQueries = require('../db/queries/smslogs');

  
  router.get('/:id', (req, res) => {
      userQueries.getSmslog()
        .then(sms => {
          res.json({ sms });
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    });
  
  
  module.exports = router;
  
