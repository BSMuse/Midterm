 entity CLIENTS {
    client_id (PK)
    name
    phone_number
    email
  }

  entity RESTAURANT {
    restaurant_id (PK)
    name
    description
  }

  entity DISHES {
    dish_id (PK)
    restaurant_id (FK)
    name
    description
    price
  }

  entity ORDERS {
    order_id (PK)
    client_id (FK)
    restaurant_id (FK)
    order_date
    pickup_time
    status
    Total order amount
  }

  entity NOTIFICATIONS {
    notification_id (PK)
    client_id (FK)
    restaurant_id (FK)
    message
    timestamp
  }

  entity SMSLOGS {
    log_id (PK)
    sender (Client or Restaurant)
    recipient (Client or Restaurant)
    message
    timestamp
  }