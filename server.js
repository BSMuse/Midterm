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

app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/client/styles',
    isSass: false, // false => scss, true => sass
  })
);

app.get('/login/:id', (req, res) => {
  req.session.user_id = req.params.id;
  res.redirect('/');
});


const dishesRoutes = require('./routes/dishes-api.js');
const menusRoutes = require('./routes/menus-api.js');
const ordersRoutes = require('./routes/orders-api.js');
const restaurantRoutes = require('./routes/restaurant-api.js');
const notificationsRoutes = require('./routes/notifications-api.js');
const smslogsRoutes = require('./routes/smslogs-api.js');
const searchRoutes = require('./routes/search-api.js');
const userApiRoutes = require('./routes/users-api');
// Mount all resource routes

app.use('/api/dishes', dishesRoutes);
app.use('/api/menus', menusRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use('/api/smslog', smslogsRoutes);
app.use('/api/search', searchRoutes);
app.use('/login', userApiRoutes);


// Home page

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
