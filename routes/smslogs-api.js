const express=require('express');
const router=express.Router();
const userQueries = require('../db/queries/smslogs');

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
      userQueries.getSmslogs()
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
  
