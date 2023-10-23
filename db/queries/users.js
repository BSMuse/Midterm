const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM CLIENTS;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUsers };
