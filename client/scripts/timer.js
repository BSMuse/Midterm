$(document).ready(function() {
    try {
        const steps = [
            {
                title: "Order being made!",
                description: "Your order is being prepared. Sit tight!",
            },
            {
                title: "Your Order is on the way!",
                description: "Order done and picked up!",
            },
            {
                title: "Almost there!",
                description: "Your order has nearly arrived at your location.",
            },
            {
                title: "Delivered!",
                description: "Your order has been delivered. Enjoy your meal!",
            }
        ];

        let timerInterval; // Define timerInterval in an accessible scope

        // Function to update the timer display
        function updateTimerDisplay(targetTime) {
            const currentTime = Date.now();
            const elapsedTime = targetTime - currentTime;
            if (elapsedTime <= 0) {
                // Timer has reached 0 seconds, stop it
                clearInterval(timerInterval);
                $('#timer').text('0:00');
                // Remove the 'targetTime' cookie
                deleteCookie('targetTime');
            } else {
                const minutes = Math.floor(elapsedTime / 60000);
                const seconds = Math.floor((elapsedTime % 60000) / 1000);
                $('#timer').text(minutes + ':' + (seconds < 10 ? '0' : '') + seconds);
            }
        }

        // Function to add steps to "order_progress" container
        function addOrderProgressStep(stepIndex) {
            const step = steps[stepIndex];

            const stepDescHtml = `
                <div class="step_desc">
                    <h3>${step.title}</h3>
                    <p>${step.description}</p>
                </div>
            `;

            $('.order_progress').html(stepDescHtml);
        }

        // Start or resume the timer
        function startTimer(targetTime) {
            let currentStep = 0;

            // Update the timer display every second
            updateTimerDisplay(targetTime);

            timerInterval = setInterval(function() {
                updateTimerDisplay(targetTime);

                // Check if it's time to move to the next step
                if (targetTime - Date.now() <= 22500 && currentStep === 0) {
                    addOrderProgressStep(1); // Add the "Almost there!" step
                    currentStep = 1;
                } else if (targetTime - Date.now() <= 15000 && currentStep === 1) {
                    addOrderProgressStep(2); // Add the "Done!" step
                    currentStep = 2;
                } else if (targetTime - Date.now() <= 1 && currentStep === 2) {
                    addOrderProgressStep(3); // Add the "Delivered!" step
                    currentStep = 3;
                }
            }, 1000);

            // Add the initial step to "order_progress"
            addOrderProgressStep(0);
        }

        // Retrieve the stored target time from the cookie
        const storedTime = getCookie('targetTime');
        if (storedTime) {
            const targetTime = parseInt(storedTime, 10);
            startTimer(targetTime);
        } else {
            // Calculate a new target time (e.g., 30 seconds from now) and store it in the cookie
            const targetTime = Date.now() + 30 * 1000; // 30 seconds in milliseconds
            setCookie('targetTime', targetTime, 1); // Store it for 1 day
            startTimer(targetTime);
        }

        // Handle page navigation to stop the timer
        $(window).on('beforeunload', function() {
            try {
                clearInterval(timerInterval);
            } catch (error) {
                // Handle clearInterval errors
                console.error('Error stopping the timer:', error);
            }
        });

        // Helper function to set a cookie
        function setCookie(name, value, days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
        }

        // Helper function to get a cookie
        function getCookie(name) {
            const cookieName = name + "=";
            const decodedCookie = decodeURIComponent(document.cookie);
            const cookieArray = decodedCookie.split(';');
            for (let i = 0; i < cookieArray.length; i++) {
                let cookie = cookieArray[i];
                while (cookie.charAt(0) == ' ') {
                    cookie = cookie.substring(1);
                }
                if (cookie.indexOf(cookieName) == 0) {
                    return cookie.substring(cookieName.length, cookie.length);
                }
            }
            return null;
        }

        // Helper function to delete a cookie
        function deleteCookie(name) {
            document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
    } catch (error) {
        // Handle unexpected errors
        console.error('An unexpected error occurred:', error);
    }
});
