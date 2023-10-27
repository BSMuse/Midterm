const db = require('../connection');

// Function to get order items by order ID
const getOrderItemsByOrderId = (orderId) => {
    const queryString = `
    SELECT ORDER_ITEMS.order_item_id, ORDER_ITEMS.order_id, ORDER_ITEMS.dish_id, ORDER_ITEMS.quantity,
           DISHES.name AS dish_name, DISHES.price AS dish_price
    FROM ORDER_ITEMS
    JOIN DISHES ON ORDER_ITEMS.dish_id = DISHES.dish_id
    WHERE ORDER_ITEMS.order_id = $1;
    `;
    return db.query(queryString, [orderId])
        .then((data) => {
            return data.rows;
        });
};

module.exports = {
    getOrderItemsByOrderId,
};
