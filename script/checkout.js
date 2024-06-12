document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.getElementById('cartItems');
    const total = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkoutBtn');
  
    // Retrieve items from localStorage
    const cart = JSON.parse(localStorage.getItem('checkout')) || [];
  
    // Display cart items
    function displayCart() {
      cartItems.innerHTML = '';
      let totalPrice = 0;
  
      cart.forEach((item) => {
        totalPrice += item.amount;
        cartItems.innerHTML += `
          <div class="cart-item">
            <img src="${item.img_url}" alt="${item.productName}">
            <div>
              <h3>${item.productName}</h3>
              <p>${item.description}</p>
              <p>$${item.amount}</p>
            </div>
          </div>
        `;
      });
  
      // Display total price
      total.textContent = `Total: $${totalPrice}`;
    }
  
    displayCart();
  
    // Checkout button event listener
    checkoutBtn.addEventListener('click', function () {
      // Implement your checkout logic here
      // For example: clear cart, redirect to payment page, etc.
      localStorage.removeItem('checkout');
      alert('Checkout completed!');
      displayCart(); // Refresh cart display
    });
  
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
  });
  