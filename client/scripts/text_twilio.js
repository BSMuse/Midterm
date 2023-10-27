$(document).ready(function() {
  $.get('/api/send-sms', function(data) {
      console.log(data); 
  });
});
