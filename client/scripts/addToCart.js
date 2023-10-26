$(document).ready(function() {
  // Initialize cart with an empty array
  let cart = [];
console.log('dom loaded with cart');


  $(document).on('click', '.addToCart', function () {
    console.log('add to cart button clicked');
    // Takes data from 'this' dynamically rendered dish card and places into var
    const dishCard = $(this).closest('.dish_cards');
    const dishName = dishCard.find('span').text();
    const dishPrice = parseFloat(dishCard.find('h3').text().replace('$', ''));
    // Var added for easier readability
    const dish = {
      name: dishName,
      price: dishPrice
    };

    addToCart(dish);
  });
  const addToCart = function (dish) {
    // Takes in dish and pushes to cart
    cart.push(dish);
    // To check what is in the cart array
    console.log(cart);
    // AJAX post to server as JSON
    $.ajax({
      url: '/add-to-cart',
      method: 'POST',
      data: { cart: JSON.stringify(cart) },
      success: function(response) {
        console.log("Server updated:", response);
      }
    });
    // Could attach this post to user cookie server-side
  };

});