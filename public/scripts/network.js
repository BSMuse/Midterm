function getuserDetails() {
    console.log("getuserDetails");
    return $.ajax({
        url: "/api/users",
    });
}

function getRestaurant() {
    let url = "/api/restaurant";
    return $.ajax({
        url,
    });
}

function getAllDishes() {
    console.log("get the dishes");
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