const db = require('../connection');

const getUsers = (userPhoneno) => {
  return db.query('SELECT name,phone_number FROM CLIENTS where phone_number=$1;', [userPhoneno])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getUsers };
