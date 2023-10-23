const db = require('../connection');

const getUsers = (userid) => {
  const user_id=userid;
  return db.query('SELECT * FROM CLIENTS where client_id=$1;',[user_id])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUsers };
