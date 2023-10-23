function getuserDetails() {
    console.log("getuserDetails");
    return $.ajax({
        url: "/api/user",
    });
}

function getAllRestaurant() {
    let url = "/api/restaurants";
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