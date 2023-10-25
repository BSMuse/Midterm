$(() => {
  // User can search through a dish name from this functionality

  $('#searchForm').on('submit', function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    $('#search-bar').val('');
    getAllDishes(data)
      .then(function(result) {
        rendersearchDishes(result.dishes);
      })

  });

  function rendersearchDishes(dishes) {

    // Loop through the 'dishes' array and create popular dish card
    dishes.forEach(dish => {
      const $popularDishCard = $(`
        <div class="dish_cards">
          <img src="${dish.image}" alt="${dish.name} descriptive text">
          <footer>
              <span>${dish.name}</span>
              <h3>$${dish.price}</h3>
          </footer>
        </div>
      `);

      // Append dish_card to #search-result
      $('#search-result').append($popularDishCard);
    });
  }


});


