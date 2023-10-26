CREATE TABLE CLIENTS (
    client_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15) NOT NULL
);

CREATE TABLE RESTAURANT (
    restaurant_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    phone_number VARCHAR(15) NOT NULL
);

CREATE TABLE DISHES (
    dish_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description VARCHAR(255),
    image VARCHAR(255),
    restaurant_id INT,
    FOREIGN KEY (restaurant_id) REFERENCES RESTAURANT(restaurant_id) ON DELETE CASCADE
);

CREATE TABLE ORDERS (
    order_id SERIAL PRIMARY KEY,
    client_id INT,
    restaurant_id INT,
    pickup_time TIME,
    order_status BOOLEAN DEFAULT FALSE,
    total_order_amount DECIMAL(10, 2),
    FOREIGN KEY (client_id) REFERENCES CLIENTS(client_id) ON DELETE CASCADE,
    FOREIGN KEY (restaurant_id) REFERENCES RESTAURANT(restaurant_id) ON DELETE CASCADE
);

CREATE TABLE ORDER_ITEMS (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT,
    dish_id INT,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES ORDERS(order_id) ON DELETE CASCADE,
    FOREIGN KEY (dish_id) REFERENCES DISHES(dish_id) ON DELETE CASCADE
);