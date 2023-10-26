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