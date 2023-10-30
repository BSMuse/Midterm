const db = require('../connection');
const getDishes = (searchOption) => {
    const queryParams = [];
    let queryString = `
    SELECT DISTINCT category, name, price, description, image
    FROM DISHES
    `;
    if (searchOption.search) {

        const cleanedSearch = `%${searchOption.search.replace(/\s/g, '')}%`;
        queryParams.push(cleanedSearch);
        queryString += `WHERE REPLACE(name, ' ', '') ILIKE $${queryParams.length} `;

    }
    return db.query(queryString, queryParams)

        .then((data) => {
            return data.rows;
        });
};

const getMenus = (Options) => {
    console.log("in database", Options);
    const queryParams = [];
    let queryString = `
    SELECT category ,name,price,description,image 
     FROM  DISHES
    `;
    if (Options !== 'All') {
        queryParams.push(`%${Options}%`);
        queryString += `WHERE  category LIKE $${queryParams.length} `;

    }
    return db.query(queryString, queryParams)
        .then((data) => {
            return data.rows;
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
     JOIN CLIENTS ON  ORDERS.client_id=CLIENTS.client_id
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
    getRestaurant,
    getOrder,
    getMenus


};