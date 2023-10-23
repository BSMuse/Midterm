
function getMyDetails() {
    console.log("getuserDetails");
    return $.ajax({
      url: "/api/users",
    });
  }
  
  function getAllRestaurant() {
    let url = "/api/restaurant";
    return $.ajax({
      url,
    });

  }
      function getAllDishes() {
    let url = "/api/dishes";
    return $.ajax({
      url,
    });
  }
  function getSearchedItem(params) {
    let url = "/api/search";
    if (params) {
      url += "?" + params;
    }
    return $.ajax({
      url,
    });
  }
  function getNotification() {
    let url = "/api/notifications";
    return $.ajax({
      url,
    });
  }

  const submitOrder = function(data) {
    return $.ajax({
      method: "POST",
      url: "/api/orders",
      data,
    });
  }

