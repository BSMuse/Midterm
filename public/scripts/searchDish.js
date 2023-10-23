$(() => {

    $('#searchForm').on('submit', function(event) {
        event.preventDefault();
        console.log("I am in search form button");
        getAllDishes()
        .then(function(result){
            rendersearchDishes(result.dishes);
        })

    });

    function  rendersearchDishes(dishes) {

        // Loop through the 'dishes' array and create popular dish cards
        dishes.forEach(dish => {
          const $popularDishCard = $(`
        <div class="dish_cards">
          <img src="${dish.image}" alt="${dish.name} descriptive text">
          <footer>
            <div>
              <span>${dish.name}</span>
              <i>Favourite icon</i>
            </div>
            <div>
              <h3>$${dish.price}</h3>
              <small><em>Delivery fee</em> $2</small>
            </div>
          </footer>
        </div>
      `);
  
          // Append each popular dish card to the popular dishes container
          $('#cardContainer').append($popularDishCard);
        });
      }


});


