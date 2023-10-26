$(document).ready(function() {
  try {
      // Start or resume the 60-second timer
      function startTimer() {
          const startTime = new Date().getTime();
          const targetTime = startTime + 32 * 1000; // 60 seconds in milliseconds

          // Update the timer display every second
          const timerInterval = setInterval(function() {
              try {
                  const currentTime = new Date().getTime();

                  if (currentTime >= targetTime) {
                      // Timer has reached 60 seconds, stop it
                      clearInterval(timerInterval);
                      $('#timer').text('0:00');
                  } else {
                      const elapsedTime = targetTime - currentTime;
                      const minutes = Math.floor(elapsedTime / 60000);
                      const seconds = Math.floor((elapsedTime % 60000) / 1000);

                      $('#timer').text(minutes + ':' + (seconds < 10 ? '0' : '') + seconds);
                  }
              } catch (error) {
                  // Handle display errors
                  console.error('Error updating timer display:', error);
              }
          }, 1000);
      }

      // Start the timer on page load
      startTimer();

      // Handle page navigation to stop the timer
      $(window).on('beforeunload', function() {
          try {
              clearInterval(timerInterval);
          } catch (error) {
              // Handle clearInterval errors
              console.error('Error stopping the timer:', error);
          }
      });
  } catch (error) {
      // Handle unexpected errors
      console.error('An unexpected error occurred:', error);
  }
});
