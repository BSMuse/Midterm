$(document).ready(function () {
  // Initialize cart with an empty array
  let cart = [];

  function renderCartItems(cart) {
    $('.cart-container').empty();

    cart.forEach((item, index) => {

      const cartItem = `
      <div class="dish_info">
      <img src="https://placehold.co/100?font=roboto" alt="${item.name} descriptive text here">
      <h3>${item.name}</h3>
      <p class="total-cost">$${item.price.toFixed(2)}</p>
      <button class="delete-item" data-item-index="${index}">x</button>
      </div>
      `;

      $('.cart-container').append(cartItem);
    });
  }

  renderCartItems(cart);

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
      success: function (response) {
        console.log("Cart updated:", response);
      }
    });
  };

  $(document).on('click', '.addToCart', function () {
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
  });

  $(document).on('click', '.delete-item', function () {
    const dishContainer = $(this).closest('.dish_info');
    const dishName = dishContainer.find('h3').text();
    // Find dish in cart array and delete it
    const itemIndex = cart.findIndex(item => item.name === dishName);
    if (itemIndex > -1) {
      cart.splice(itemIndex, 1);
    }
    dishContainer.remove();
    $.ajax({
      url: '/api/orders/remove-from-cart',
      method: 'POST',
      data: { cart: JSON.stringify(cart) },
      success: function (response) {
        console.log("Server updated:", response);
      }
    });
  });
});