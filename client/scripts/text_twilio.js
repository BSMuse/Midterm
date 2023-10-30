$(document).ready(function() {
  // Replace with the actual phone numbers
  const restaurantPhoneNumber = '+17809204015'; // Restaurant's phone number
  const clientPhoneNumber = '+17809204015'; // Client's phone number

  // Send "New order received" to the restaurant
  $.post('/api/sendsms/send-sms/', {
    phoneNumber: restaurantPhoneNumber,
    message: 'New order received.',
  }, function(data) {
    console.log(data);
  });
  
    // Send "Order Ready" to the client
    $.post('/api/sendsms/send-sms/', {
      phoneNumber: clientPhoneNumber,
      message: "Luna's kitchen has your order! Preparing it now.",
    }, function(data) {
      console.log(data);
    });

  // After a 30-second delay, send "Order Delivered" to the client
  setTimeout(function() {
    $.post('/api/sendsms/send-sms/', {
      phoneNumber: clientPhoneNumber,
      message: 'Order Delivered!',
    }, function(data) {
      console.log(data);
    });
  }, 30000); // 30 seconds (30,000 milliseconds)
});