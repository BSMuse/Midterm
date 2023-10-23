$(() => {
  getAllDishes()
    .then(function(dishes) {
      console.log("dishes are", dishes);
      renderDishesCategories(dishes);
      renderPopularDishes(dishes);
    });

  function renderDishesCategories(dishes) {
    const $CatgoriesListing = $(`
      <article class="categories">
        <h2>Categories</h2>
        <div class="category_container">
        </div>
      </article>
    `);

    // Loop through the dishes data and create HTML elements for each category
    const uniqueCategories = Array.from(new Set(dishes.map(dish => dish.category)));
    uniqueCategories.forEach(category => {
      const $categoryCard = $(`
        <div class="category_cards">
          <h3>${category}</h3>
          <!-- You might add some category-specific content here -->
        </div>
      `);

      $CatgoriesListing.find('.category_container').append($categoryCard);
    });

    // Append the categories listing to a container element on your page
    $('.dishCategories').append($CatgoriesListing);
  }

  function renderPopularDishes(dishes) {
    // Select the cards container for popular dishes
    const $popularDishesContainer = $('.popular_dishes .cards_container');

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
      $popularDishesContainer.append($popularDishCard);
    });
  }
});
