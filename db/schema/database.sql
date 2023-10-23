
CREATE TABLE CLIENTS (
    client_id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15) NOT NULL
);

CREATE TABLE RESTAURANT (
    restaurant_id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    phone_number VARCHAR(15) NOT NULL,
    on_sale BOOLEAN DEFAULT FALSE
);

CREATE TABLE DISHES (
    dish_id INT PRIMARY KEY,
    restaurant_id INT,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image VARCHAR(255),
    FOREIGN KEY (restaurant_id) REFERENCES RESTAURANT(restaurant_id) ON DELETE CASCADE
);

CREATE TABLE ORDERS (
    order_id INT PRIMARY KEY,
    restaurant_id INT,
    pickup_time TIME,
    order_status BOOLEAN DEFAULT FALSE,
    total_order_amount DECIMAL(10, 2),
    FOREIGN KEY (client_id) REFERENCES CLIENTS(client_id) ON DELETE CASCADE,
    FOREIGN KEY (restaurant_id) REFERENCES RESTAURANT(restaurant_id) ON DELETE CASCADE
);

CREATE TABLE NOTIFICATIONS (
    notification_id INT PRIMARY KEY,
    restaurant_id INT,
    message TEXT,
    timestamp TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES CLIENTS(client_id) ON DELETE CASCADE,
    FOREIGN KEY (restaurant_id) REFERENCES RESTAURANT(restaurant_id) ON DELETE CASCADE
);

CREATE TABLE SMSLOGS (
    log_id INT PRIMARY KEY,
    sender VARCHAR(50) CHECK (sender IN ('Client', 'Restaurant')),
    recipient VARCHAR(50) CHECK (recipient IN ('Client', 'Restaurant')),
    message TEXT,
    timestamp TIMESTAMP
);
