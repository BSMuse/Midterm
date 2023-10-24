const db = require('../connection');

const getUsers = (userid) => {
  const user_id = userid;
  return db.query('SELECT name,phone_number FROM CLIENTS where name=$1;', [user_id])
    .then(data => {
      return data.rows;
    });
};



module.exports = { getUsers };
