
$(() => {

  getDishData();

});

const getDishData = function() {
  // Call getAllDishes function from network file.
  const data = $(this).serialize();
  getAllDishes(data)
    .then(function(result) {
      console.log("Dishes are", result);
      renderDishesCategories(result.dishes);
      renderPopularDishes(result.dishes);
    });

  function renderDishesCategories(dishes) {

    const ids = dishes.map(({ category }) => category);
    const filtered = dishes.filter(({ category }, index) =>
      !ids.includes(category, index + 1));

    filtered.forEach((i) => {
      const $categoryCard = $(`
      <div class="category_cards">
        <h3>${i.category}</h3>
      </div>
      `);
      $('#dishCategories').append($categoryCard);
    });

  }
  function renderPopularDishes(dishes) {

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


}