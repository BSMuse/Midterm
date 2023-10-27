$(document).ready(function() {
  // Make a GET request to trigger the Twilio message sending on page load
  $.get('/send-sms', function(data) {
      console.log(data); // You can log the response from the server
  });
});
