$(() => {
  // User can search through a dish name from this functionality


  $('.dish_category').on('click', function() {
    let category = $(this).data('category');
    //let category = $(this).text();
    console.log("dish catgory", category);
    getAllMenus(category)
      .then(function(result) {
        renderMenu(result.dishes);
      })

  });

  function renderMenu(dishes) {
    $('#menuCard').empty();
    // Loop through the 'dishes' array and create popular dish card
    dishes.forEach(dish => {
      const $popularDishCard = $(`
          <div class="dish_cards">
            <img src="${dish.image}" alt="${dish.name}">
            <footer>
                <span>${dish.name}</span>
                <h3>$${dish.description}</h3>
            </footer>
          </div>
        `);

      $('#menuCard').append($popularDishCard);
      // Append dish_card to #search-result

    });


  }


});


