const express=require('express');
const router=express.Router();
<<<<<<< HEAD
const userQueries = require('../db/queries/dishes.js');
=======
const userQueries = require('../db/queries/dishes');
>>>>>>> 451c6ec3daf7a2de4248c823e306f9224a840830
  
  router.get('/:id', (req, res) => {
    const notificationId=req.params.id;
      userQueries.getNotificationById(notificationId)
        .then((notification) => {
          res.json({ notification });
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    });
  
  
  module.exports = router;
  
