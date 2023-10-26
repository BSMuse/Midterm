$(document).ready(function () {
  // Initialize cart with an empty array
  let cart = [];

  function renderCartItems(cart) {
    $('.cart-container').empty();

    cart.forEach((item, index) => {

      const cartItem = `
      <div class="dish_info">
      <img src="https://placehold.co/100?font=roboto" alt="${item.name} descriptive text here">
      <h3>${item.name}</h3>
      <p class="total-cost">$${item.price.toFixed(2)}</p>
      <button class="delete-item" data-item-index="${index}">x</button>
      </div>
      `;

      $('.cart-container').append(cartItem);
    });
  }

  renderCartItems(cart);

  function addToCart(newItem) {
    // Takes in dish and pushes to cart
    cart.push(newItem);
    // To check what is in the cart array
    console.log(cart);
    // AJAX post to server as JSON
    $.ajax({
      url: '/api/orders/add-to-cart',
      method: 'POST',
      data: { newItem: JSON.stringify(newItem) },
      success: function (response) {
        console.log("Cart updated:", response);
      }
    });
  };

  $(document).on('click', '.addToCart', function () {
    // Takes data from 'this' dynamically rendered dish card and places into var
    const dishCard = $(this).closest('.dish_cards');
    const dishName = dishCard.find('span').text();
    const dishPrice = parseFloat(dishCard.find('h3').text().replace('$', ''));
    // Var added for easier readability
    const newItem = {
      name: dishName,
      price: dishPrice
    };

    addToCart(newItem);
  });

  $(document).on('click', '.delete-item', function () {
    const dishContainer = $(this).closest('.dish_info');
    const dishName = dishContainer.find('h3').text();
    // Find dish in cart array and delete it
    const itemIndex = cart.findIndex(item => item.name === dishName);
    if (itemIndex > -1) {
      cart.splice(itemIndex, 1);
    }
    dishContainer.remove();
    $.ajax({
      url: '/api/orders/remove-from-cart',
      method: 'POST',
      data: { cart: JSON.stringify(cart) },
      success: function (response) {
        console.log("Server updated:", response);
      }
    });
  });

  $(document).on('click', '.payment_type', function () {
    console.log("Button clicked, id:", $(this).attr('id'));
    // Clear any existing warnings
    $('.payment-warning').text('');
    // Clear anything in this element if any
    $('#payment-type').empty();

    // Check which payment type was clicked based on the id
    const paymentType = $(this).attr('id');
    // If credit card button is clicked
    if (paymentType === 'credit-card') {
      // Create extra html options istead of hard-coding 20+ lines
      let monthOptions = '';
      for (let i = 1; i <= 12; i++) {
        monthOptions += `<option value="${i}">${i < 10 ? '0' + i : i}</option>`;
      }

      let yearOptions = '';
      for (let i = 2023; i < 2023 + 10; i++) {
        yearOptions += `<option value="${i}">${i}</option>`;
      }

      const creditCardHtml = `
      <div class="cardholder">
        <h3>Cardholder</h3>
        <input type="text" placeholder="Luna" id="cardholder-name">
      </div>
      <div class="cardnum">
        <h3>Card Number</h3>
        <input type="number" placeholder="123456789012" id="credit-number">
      </div>
      <div class="expiration">
        <h3>Expiration:</h3>
        <label for="month">Month:</label>
        <select name="month" id="expiry-month">
          <option value="MM">MM</option>
          ${monthOptions}
        </select>
        <label for="year">Year:</label>
        <select name="year" id="expiry-year">
          <option value="20YY">20YY</option>
          ${yearOptions}
        </select>
        <h3>CVV:</h3>
        <label for="ccv">CCV:</label>
        <input type="number" name="ccv" id="security-num" placeholder="XXX"></input>
      </div>
    `;

      $('#payment-type').append(creditCardHtml);
    } else if (paymentType === 'cash-payment') {
      const warningText = 'Please note that cash on hand is limited to small bills. If you will be paying in larger bills, please notify us in advance.';
      $('.payment-warning').text(warningText);
    }
  });

  $(document).on('click', '.confirm_button', function () {
    event.preventDefault();
    let isValid = true;
    let warningText = '';

    // Validate cardholder name
    const cardHolderName = $('#cardholder-name').val().trim();
    if (!cardHolderName || typeof cardHolderName !== 'string') {
      isValid = false;
      warningText += 'Cardholder name must be a valid string. ';
    }

    // Validate card number is 12 numbers
    const cardNumber = $('#credit-number').val();
    if (!/^\d{12}$/.test(cardNumber)) {
      isValid = false;
      warningText += 'Card number must be exactly 12 digits. ';
    }

    // Validate security number
    const securityNum = $('#security-num').val();
    if (!/^\d{3}$/.test(securityNum)) {
      isValid = false;
      warningText += 'Security number must be exactly 3 digits. ';
    }

    if (!isValid) {
      $('.payment-warning').text(warningText);
      return;
    }

    // Redirect to /order_status only after all data is valid
    window.location.href = '/order_status';
  });

});