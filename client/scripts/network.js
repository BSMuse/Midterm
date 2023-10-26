
function getuserDetails() {
  return $.ajax({
    url: "/login",
  });
}

function getAllRestaurant() {
  let url = "/api/restaurant";
  return $.ajax({
    url,
  });

}
function getAllMenus(params) {
  let url = "/api/menus";
  if (params) {
    url += "?type=" + params;
  }
  return $.ajax({
    url,
  });
}
function getAllDishes(params) {
  let url = "/api/dishes";
  if (params) {
    url += "?" + params;
  }
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

