const express=require('express');
const router=express.Router();
<<<<<<< HEAD
const userQueries = require('../db/queries/dishes.js');
=======
const userQueries = require('../db/queries/dishes');
>>>>>>> 451c6ec3daf7a2de4248c823e306f9224a840830

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
  
