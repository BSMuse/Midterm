const db = require('../connection');


const getDishes = () => {
    return db.query('SELECT DISTINCT  category ,name,price,description,image  FROM "public"."dishes"')
        .then((data) => {
            return data.rows;
        });
};

const getDishById = (dish_name) => {
    return db.query('SELECT name,category,price,description,image FROM  "public"."dishes" where name LIKE=$1', [`%${dish_name}%`])
        .then((data) => {
            console.log(data.rows[0]);
            return data.rows[0];
        });
};

const getRestaurant = () => {
    return db.query('SELECT name,description,phone_number FROM RESTAURANT ')
        .then((data) => {
            return data.rows;
        });
};

const getOrder = (orderId) => {
    const queryString = `
    SELECT CLIENT.name,CLIENT.phone_number,
    RESTAURANT.name,ORDERS.order_id,ORDERS.pickup_time,
    ORDERS.order_status
     FROM ORDERS
     JOIN CLIENTS ON client_id=CLIENTS.client_id
     JOIN RESTAURANT ON restaurant_id=RESTAURANT.restaurant_id
     WHERE order_id=$1;
    `;
    return db.query(queryString, [orderId])
        .then((data) => {
            return data.rows;
        });
};



module.exports = {
    getDishes,
    getDishById,
    getRestaurant,
    getOrder,


};