const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/dishes');

router.use((req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect('/index');
  }
  // Reset cart if invalid
  if (!req.session.cart) {
    req.session.cart = [];
  }

  next();
});


// Retrieve a specific order by ID
router.get('/:id', (req, res) => {
  const orderId = req.params.id;
  userQueries.getOrder(orderId)
    .then((order) => {
      res.json({ order });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


// Create a new order
router.post('/', async (req, res) => {
  try {
    // Validate and sanitize the order data from the request body
    const orderData = req.body;

    // Call the appropriate function from userQueries to create a new order
    const newOrder = await userQueries.createOrder(orderData);

    res.status(201).json({ order: newOrder });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Adding a dish to the cart
router.post('/add-to-cart', (req, res) => {
  console.log('post add to cart has been rendered');
  const newItem = JSON.parse(req.body.newItem);
  req.session.cart.push(newItem);
  req.session.save();
  res.status(200).send('Item added to cart');
});

router.post('/remove-from-cart', (req, res) => {
  console.log('remove post route has been rendered');
  const updatedCart = JSON.parse(req.body.cart);

  req.session.cart = updatedCart;
  req.session.save((err) => {
    if (err) {
      return res.status(500).send('Error updating session');
    }
    res.status(200).send('Item deleted from cart');
  });
});

module.exports = router;
