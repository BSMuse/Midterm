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
    pickup_time TIME,
    order_status BOOLEAN DEFAULT FALSE,
    total_order_amount DECIMAL(10, 2),
    client_id INT,
    restaurant_id INT,
    FOREIGN KEY (client_id) REFERENCES CLIENTS(client_id) ON DELETE CASCADE,
    FOREIGN KEY (restaurant_id) REFERENCES RESTAURANT(restaurant_id) ON DELETE CASCADE
);

CREATE TABLE NOTIFICATIONS (
    notification_id SERIAL PRIMARY KEY,
    message TEXT,
    timestamp TIMESTAMP,
    client_id INT,
    restaurant_id INT,
    FOREIGN KEY (client_id) REFERENCES CLIENTS(client_id) ON DELETE CASCADE,
    FOREIGN KEY (restaurant_id) REFERENCES RESTAURANT(restaurant_id) ON DELETE CASCADE
);

CREATE TABLE SMSLOGS (
    log_id SERIAL PRIMARY KEY,
    sender VARCHAR(50) CHECK (sender IN ('Client', 'Restaurant')),
    recipient VARCHAR(50) CHECK (recipient IN ('Client', 'Restaurant')),
    message TEXT,
    timestamp TIMESTAMP
);
