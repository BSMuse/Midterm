$(document).ready(function () {
  const orderId = 3;
  // Function to fetch and display order items by a specific order ID
  function displayOrderItems(orderId) {
    const orderDiv = $("#order");

    // Make an AJAX request to the server to fetch order items by order ID
    $.ajax({
      url: `/api/order-items/getorderitems/${orderId}`, // Include the order ID in the URL
      method: "GET",
      dataType: "json",
      success: function (orderItems) {
        // Clear any existing content in the "order" div
        orderDiv.empty();

        // Display the retrieved order items in a table
        orderDiv.html(`
          <table>
            <tr class="order_table">
              <th>Dish</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
            <tbody>
              ${orderItems.map(order => `
                <tr class="order_table">
                  <td>${order.dish_name}</td> <!-- Changed to dish_name -->
                  <td>${order.dish_price}</td> <!-- Changed to dish_price -->
                  <td>${order.quantity}</td>
                </tr>
              `).join('')}
              <tr>
                <td colspan="2">Delivery Fee</td>
                <td>$2.50</td>
              </tr>
              <tr class="order_table">
                <td colspan="2"><strong>Total Amount</strong></td>
                <td><strong>${calculateTotalAmount(orderItems)}</strong></td>
              </tr>
            </tbody>
          </table>
        `);
      },
      error: function (error) {
        console.error("Error fetching order items:", error);
      }
    });
  }

  // Function to calculate the total amount
  function calculateTotalAmount(orderItems) {
    const deliveryFee = 2.50;
    const total = orderItems.reduce((acc, order) => acc + parseFloat(order.dish_price) * order.quantity, 0); // Changed to dish_price
    return (total + deliveryFee).toFixed(2);
  }

  // Fetch and render order items for a specific order when the page loads
 // Replace with the actual order ID you want to fetch
  displayOrderItems(orderId);
});
