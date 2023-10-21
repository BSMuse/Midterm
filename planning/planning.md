Option 10: Food Pick-up Ordering
A food ordering experience for a single restaurant. Hungry clients of this fictitious restaurant can visit its website, select one or more dishes and place an order for pick-up. They will receive a notification when their order is ready.

The restaurant and client both need to be notified since this app serves as an intermediary.

When an order is placed the restaurant receives the order via SMS. The restaurant can then specify how long it will take to fulfill it. Once they provide this information, the website updates for the client and also notifies them via SMS. 

User Stories: 
- As a hungry client, I want to visit the restaurant's website so that I can place an order for pick-up.
- As a hungry client, I want to browse the restaurant's menu on the website to select one or more dishes for my order.
- As a hungry client, I want to add selected dishes to my cart and review my order before placing it.
- As a hungry client, I want to place an order for pick-up through the website and provide my contact information.
- As a hungry client, I want to receive a notification when my order is ready for pick-up, so I know when to go to the restaurant.
- As a restaurant, I want to receive order details when a client places an order via SMS.
- As a restaurant, I want to specify how long it will take to fulfill an order and provide this information to the client.
- As a restaurant, I want the website to update in real-time with the estimated order fulfillment time.
- As a restaurant, I want the ability to notify the client when their order is ready for pick-up via SMS. 

Wireframe and Mock-up: https://app.uizard.io/prototypes/xVR8yjEPZWS4ROxOAdJx

Backlog (Trello): https://trello.com/b/hTFNgLlt/midterm

Tasks: 

Certainly, here's the task list with the mention of marketing and Git removed:

**Server-side Development (NodeJS and Express):**
- Set up a NodeJS project with Express to create the web application.
- Implement the server-side logic using ES6 for improved code readability.
- Develop RESTful routes to handle client interactions for placing orders, viewing menus, and receiving notifications.
- Create API endpoints for client interactions with the server.

**Front-End Development (CSS/UI Frameworks, jQuery):**
- Design and develop the front-end of the website using HTML, CSS, and JavaScript.
- Implement one or more CSS or UI frameworks, like Bootstrap, to enhance the user interface.
- Use jQuery to add interactivity and dynamic behavior to the web pages.

**Styling (CSS Preprocessor or CSS Custom Properties):**
- Choose a CSS preprocessor (e.g., SASS) or use CSS custom properties for styling.
- Write and organize the CSS code for consistent and appealing website design.
- Ensure responsive design for a seamless user experience on various devices.

**Database Management (PostgreSQL and pg with Promises):**
- Set up a PostgreSQL database to store menu items, orders, and user information.
- Utilize the pg library with promises to connect to the PostgreSQL database.
- Create database tables and schemas to store relevant data.

**Order Placement and Management:**
- Develop the order placement functionality to enable clients to select dishes and place orders.
- Implement cart management for clients to review and modify their orders before submission.
- Store order details, including selected items and client information, in the PostgreSQL database.
- Handle real-time updates of order status, including estimated fulfillment times.

**SMS Communication with Twilio:**
- Integrate the Twilio API to enable SMS communication between the restaurant, clients, and the application.
- Set up Twilio for sending and receiving SMS notifications.
- Configure SMS notifications for order placement, updates, and order readiness.

**Client Notifications:**
- Implement a notification system to alert clients when their orders are ready for pick-up.
- Use SMS to notify clients, and provide a mechanism for opting in or out of notifications.
- Handle client preferences for notification channels.

**Testing and Quality Assurance:**
- Conduct thorough testing of the application to ensure functionality and reliability.
- Perform unit tests, integration tests, and end-to-end testing of critical features.
- Address and fix any bugs or issues identified during testing.

**Deployment and Production:**
- Deploy the application to a production environment, ensuring it is accessible to clients.
- Configure server settings, domains, and security measures for the live environment.
- Monitor the application for performance and reliability, and provide ongoing support and maintenance.
