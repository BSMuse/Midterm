const express=require('express');
const router=express.Router();
const userQueries = require('../db/queries/notifications');

// router.get('/', (req, res) => {
//     userQueries.getSmslogs()
//       .then(dishes => {
//         res.json({ restaurants });
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .json({ error: err.message });
//       });
//   });
  
  router.get('/:id', (req, res) => {
      userQueries.getNotifications()
        .then(sms => {
          res.json({ notification });
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    });
  
  
  module.exports = router;
  
