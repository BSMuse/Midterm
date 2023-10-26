const express=require('express');
const router=express.Router();
const userQueries = require('../db/queries/dishes');

  // Retrieve a specific SMS by ID
  router.get('/:id', (req, res) => {
    const smsid=req.params.id;
      userQueries.getSmslog(smsid)
        .then((sms) => {
          res.json({ sms });
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    });
  
  
  module.exports = router;
  
