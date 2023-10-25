/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');

const router = express.Router();

const userQueries = require('../db/queries/user');

router.get('/login/:id', (req, res) => {
  userQueries.getUsers(req.param.id)
    .then((users) => {
      req.session.user_id = users.client_id;
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/', (req, res) => {
  console.log('test')
  // Set a session variable when the index page loads
  req.session.user_id = '123'; // Replace '123' with the user's ID or any value you want to set

  // Send the index.html file as a response
  res.sendFile('index.html', { root: __dirname + '/public' });
});  

module.exports = router;
