$(document).ready(function () {
  // Function to fetch and display an individual order
  function displayOrder(orderId) {
      const orderDiv = $("#order");

      // Make an AJAX request to the server to fetch order data
      $.ajax({
          url: `/api/getOrder/${orderId}`,
          method: "GET",
          dataType: "json",
          success: function (order) {
              // Clear any existing content in the "order" div
              orderDiv.empty();

              // Display the retrieved order details
              orderDiv.html(`
                  Price: ${order.price}<br>
                  Dish: ${order.dishName}<br>
                  Quantity: ${order.quantity}<br>
              `);
          },
          error: function (error) {
              console.error("Error fetching order:", error);
          }
      });
  }

  // Example: When a client finalizes their order, call displayOrder with the relevant order ID
  const finalizedOrderId = 1; // Replace this with the actual order ID when a client finalizes an order
  displayOrder(finalizedOrderId);
});
