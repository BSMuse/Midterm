
// $(() => {
// //   getRestaurant().then(function(json) {

// //     //Here Added to Form elements 
// //   });
// // });

$(() => {
  console.log("I am in dishes");
  getAllDishes()
    .then(function(dishes) {
      console.log("dishes are", dishes);
      renderDishes(dishes);
    });


  function renderDishes(dishes) {
    const $CatgoriesListing = $(`
              <article class="categories">
                  <h2>Categories</h2>
                  <div class="category_container">
                  </div>
              </article>
          `);
    // Loop through the dishes data and create HTML elements for each dish
    dishes.forEach(dish => {
      const $categoryCard = $(`
          <div class="category_cards">
              <h3>${dish.category}</h3>
              <img src="${dish.image}" alt="${dish.name} sample">
          </div>
      `);

      $CatgoriesListing.find('.category_container').append($categoryCard);
    });

    // Append the categories listing to a container element on your page
    $('.dishCategories').append($CatgoriesListing);

  }

});

