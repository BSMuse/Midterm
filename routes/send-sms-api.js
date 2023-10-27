const express = require('express');
const router = express.Router();
const twilio = require('twilio');


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

// Initialize Twilio client
const twilioClient = twilio(accountSid, authToken);

// Function to send a text message using Twilio
function sendTextMessage(phoneNumber, message) {
    twilioClient.messages
        .create({
            to: phoneNumber,
            from: twilioPhoneNumber,
            body: message,
        })
        .then(message => console.log('Message sent:', message.sid))
        .catch(error => console.error('Error sending message:', error));
}

// Handle a GET request to send a message
router.get('/api/send-sms', (req, res) => {
    const userPhoneNumber = '+17809204015'; // Replace with the actual user's phone number
    const userEndMessage = 'Your order has been delivered. Enjoy your meal!';
    sendTextMessage(userPhoneNumber, userEndMessage);

    res.send('Message sent successfully');
});


