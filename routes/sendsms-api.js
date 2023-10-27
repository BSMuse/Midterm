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

// Handle a POST request to send a message
router.post('/send-sms', (req, res) => {
    const userPhoneNumber = req.body.phoneNumber; // Get the phone number from the request body
    const userEndMessage = req.body.message; // Get the message from the request body

    if (!userPhoneNumber || !userEndMessage) {
        res.status(400).send('Missing phone number or message');
        return;
    }

    sendTextMessage(userPhoneNumber, userEndMessage);
    res.send('Message sent successfully');
});

module.exports = router;

