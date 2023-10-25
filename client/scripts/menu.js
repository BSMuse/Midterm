$(() => {
  let currentCategory = "All"; // Initialize with a default category

  // Function to get menu items for a category
  const getMenuItemsForCategory = function(category) {
    getAllMenus(category)
      .then(function(result) {
        renderMenu(result.dishes);
      });
  };

  // Function to render menu items
  function renderMenu(dishes) {
    const $menuCard = $('#menuCard');
    $menuCard.empty();
    // Loop through the 'dishes' array and create popular dish card
    dishes.forEach(dish => {
      const $popularDishCard = $(`
        <div class="dish_cards">
          <img src="${dish.image}" alt="${dish.name}">
          <footer>
            <span>${dish.name}</span>
            <h3>${dish.description}</h3>
          </footer>
        </div>
      `);

      $menuCard.append($popularDishCard);
    });
  }
  // Initial load of menu items for the default category ("All")
  getMenuItemsForCategory(currentCategory);

  $('.dish_category').on('click', function() {
    const category = $(this).data('category');
    currentCategory = category; // Update the current category
    getMenuItemsForCategory(category);
  });

});

