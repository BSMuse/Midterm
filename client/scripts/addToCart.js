$(document).ready(function () {

  function addToCart(newItem) {
    
    $.ajax({
      url: '/api/order-items/add-to-order-items',
      method: 'POST',
      data: { newItem: JSON.stringify(newItem) },
      success: function (response) {
        console.log("Cart updated:", response);
      }
    });   
  };

  $(document).on('click', '.addToCart', function () {
    const dishCard = $(this).closest('.dish_cards');
    const dishId = dishCard.data('dish-id');
    
    $.ajax({
      url: `/api/dishes/${dishId}`,
      method: 'GET',
      success: function (dish) {
        addToCart(dish);
      }
    });
  });
  
});