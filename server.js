// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require("cookie-session");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client'));
app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],
  })
);

app.get('/', (req, res) => {
  console.log('session', req.session);
  // Set a session variable when the index page loads
  req.session.user_id = '123'; // Replace '123' with the user's ID or any value you want to set

  // Send the index.html file as a response
  res.sendFile('index.html', { root: __dirname + '/client' });
});  

app.get('/login/:id', (req, res) => {
  if (!req.session.user_id) {
    console.log('cookie session not set');
    return res.redirect('index');
  }

});

app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/client/styles',
    isSass: false, // false => scss, true => sass
  })
);

const userApiRoutes = require('./routes/users-api');
const dishesRoutes = require('./routes/dishes-api.js');
const menusRoutes = require('./routes/menus-api.js');
const ordersRoutes = require('./routes/orders-api.js');
const restaurantRoutes = require('./routes/restaurant-api.js');
const notificationsRoutes = require('./routes/notifications-api.js');
const smslogsRoutes = require('./routes/smslogs-api.js');
const searchRoutes = require('./routes/search-api.js');

// Mount all resource routes
app.get('/login/:id', (req, res) => {
  req.session.user_id = req.params.id;
  res.redirect('/');
});

app.use('/login', userApiRoutes);
app.use('/api/dishes', dishesRoutes);
app.use('/api/menus', menusRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use('/api/smslog', smslogsRoutes);
app.use('/api/search', searchRoutes);

// Home page

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
