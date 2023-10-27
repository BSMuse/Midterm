const express = require('express');
const router = express.Router();
const { getDishes } = require('../db/queries/dishes');
const db = require('../db/connection');

router.post('/addOrderItem', (req, res) => {
    const { dishId, orderId, quantity } = req.body;
  
    getDishes({ search: dishId })
      .then(dishDetails => {
        if (dishDetails.length === 0) {
          // If no matching dish is found, send an error response
          return res.status(400).json({ error: 'Invalid dishId' });
        }
  
        // Otherwise, proceed to insert into the ORDER_ITEMS table
        return db.query('INSERT INTO ORDER_ITEMS (order_id, dish_id, quantity) VALUES ($1, $2, $3)', [orderId, dishId, quantity])
      })
      .then(() => {
        // Successfully inserted, you can send a success response or do further operations here
        res.status(200).json({ message: 'Successfully inserted' });
      })
      .catch(err => {
        // Handle any errors here
        res.status(500).json({ error: err.message });
      });
  });
  

// router.post('/addOrderItem', (req, res) => {
//     const { dishId } = req.body;

//     getDishes({ search: dishId })
//         .then(dishDetails => {
//             db.query('INSERT INTO ORDER_ITEMS (order_id, dish_id, quantity) VALUES ($1, $2, $3)', [orderId, dishId, quantity])
//         })
//         .catch(err => {
//             res.status(500).json({ error: err.message });
//         });
// });

// // Use the db object for database operations
// const db = require('../connection');

// db.query('INSERT INTO ORDER_ITEMS (order_id, dish_id, quantity) VALUES ($1, $2, $3)', [orderId, dishId, quantity])
//   .then(result => {
//     // Successfully inserted, you can send a success response or do further operations here
//     res.status(200).json({ message: 'Successfully inserted' });
//   })
//   .catch(err => {
//     // Handle any errors here
//     res.status(500).json({ error: err.message });
//   });


module.exports = router;
