 entity CLIENTS {
    client_id (PK)
    name
    phone_number
    order_status
  }

  entity RESTAURANT {
    restaurant_id (PK)
    name
    description
    on_sale
  }

  entity DISHES {
    dish_id (PK)
    restaurant_id (FK)
    name
    price
    image
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