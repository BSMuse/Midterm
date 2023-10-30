$(document).ready(function() {
  // Initialize cart with an empty array
  let cart = [];

  function addToCart(newItem) {
    // Takes in dish and pushes to cart
    cart.push(newItem);
    // To check what is in the cart array
    console.log(cart);
    // AJAX post to server as JSON
    $.ajax({
      url: '/api/orders/add-to-cart',
      method: 'POST',
      data: { newItem: JSON.stringify(newItem) },
      success: function(response) {
        console.log("Cart updated:", response);
      }
    });
  };

  $(document).on('click', '.addToCart', function() {
    // Takes data from 'this' dynamically rendered dish card and places into var
    const dishCard = $(this).closest('.dish_cards');
    const dishName = dishCard.find('span').text();
    const dishPrice = parseFloat(dishCard.find('h3').text().replace('$', ''));
    // Var added for easier readability
    const newItem = {
      name: dishName,
      price: dishPrice
    };

    addToCart(newItem);
    alert('Added to cart');
  });
});