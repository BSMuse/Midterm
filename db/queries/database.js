const db = require('../connection');

const getDishes = () => {
    return db.query('SELECT * FROM DISHES ')
        .then(data => {
            return data.rows;
        });
};

const getDishById = (dishId) => {
    return db.query('SELECT * FROM  DISHES where dish_id=$1;', [dishId])
        .then(data => {
            return data.rows;
        });
};


const getRestaurant = () => {
    return db.query('SELECT name,description,phone_number FROM RESTAURANT ')
        .then(data => {
            return data.rows;
        });
};


module.exports = {
    getDishes,


};