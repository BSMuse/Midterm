const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const twilioClient = twilio(accountSid, authToken);

$(document).ready(function() {
    try {
        // Check if a timer is already running
        const timerRunning = req.session.timerRunning === true;
        if (timerRunning) {
            startTimer();
        } else {
            req.session.timerRunning = false;
        }

        function changeH3Color() {
          const colors = ['green']; // Define the color you want (only green in this case)
          let currentColorIndex = 0;

          setInterval(function() {
            $('.step_desc h3').css('color', ''); // Remove color from all h3 tags
            $('.step_desc h3').eq(currentColorIndex).css('color', colors[currentColorIndex]); // Apply the color to the current h3 tag
            currentColorIndex = (currentColorIndex + 1) % $('.step_desc h3').length; // Move to the next h3
        }, 20000); // Change color every 20 seconds
    }


        // Start or resume the 60-second timer
        function startTimer() {
            const startTime = parseInt(req.session.startTime) || new Date().getTime();
            const targetTime = startTime + 60 * 1000; // 60 seconds in milliseconds

            // Send a message when the timer starts
            const userPhoneNumber = 'user_phone_number'; // Replace with the actual user's phone number
            const restaurantPhoneNumber = twilioPhoneNumber; // Replace with the actual restaurant's phone number

            const userStartMessage = 'Your order is in progress.';
            const restaurantStartMessage = 'An order is being prepared.';

            sendTextMessage(userPhoneNumber, userStartMessage);
            sendTextMessage(restaurantPhoneNumber, restaurantStartMessage);

            // Update the timer display every second
            changeH3Color();
            const timerInterval = setInterval(function() {
                try {
                    const currentTime = new Date().getTime();

                    if (currentTime >= targetTime) {
                        // Timer has reached 60 seconds, stop it
                        clearInterval(timerInterval);
                        $('#timer').text('1:00');
                        req.session.timerRunning = false;

                        // Send messages to the user and the restaurant when the timer ends
                        const userEndMessage = 'Your order is ready!';
                        const restaurantEndMessage = 'An order is ready for pickup.';

                        sendTextMessage(userPhoneNumber, userEndMessage);
                        sendTextMessage(restaurantPhoneNumber, restaurantEndMessage);
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

            // Store the timer state in the session
            req.session.timerInterval = timerInterval;
            req.session.timerRunning = true;
            req.session.startTime = startTime;
        }

        // Function to send a text message
        function sendTextMessage(phoneNumber, message) {
            twilioClient.messages.create({
                to: phoneNumber,
                from: 'your_twilio_phone_number',
                body: message
            })
            .then(message => console.log('Message sent:', message.sid))
            .catch(error => console.error('Error sending message:', error));
        }

        // Start the timer on page load
        startTimer();

        // Handle page navigation to stop the timer
        $(window).on('beforeunload', function() {
            try {
                clearInterval(req.session.timerInterval);
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
