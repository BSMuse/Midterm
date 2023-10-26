/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
<<<<<<< HEAD
const router = express.Router();
const userQueries = require('../db/queries/user');
=======
>>>>>>> 451c6ec3daf7a2de4248c823e306f9224a840830

const router = express.Router();
const userQueries = require('../db/queries/user');
router.get('/', (req, res) => {
  userQueries.getUsers(req.session.user_id)
    .then((users) => {
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
