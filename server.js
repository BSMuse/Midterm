// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require("cookie-session");

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');
app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],
  })
);
app.get('/login/:id', (req, res) => {
  // using encrypted cookies
  req.session.user_id = req.params.id;

  res.redirect('/');
});
// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

const userApiRoutes = require('./routes/users-api');
const dishesRoutes = require('./routes/dishes-api.js');
const ordersRoutes = require('./routes/orders-api.js');
const restaurantRoutes = require('./routes/restaurant-api.js');
const notificationsRoutes = require('./routes/notifications-api.js');
const smslogsRoutes = require('./routes/smslogs-api.js');

// Mount all resource routes
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/user', userApiRoutes);
app.use('/api/dishes', dishesRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/restaurant', restaurantRoutes);
app.use('/api/notificationsRoutes', notificationsRoutes);
app.use('/api/smslogsRoutes', smslogsRoutes);

// Home page

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
