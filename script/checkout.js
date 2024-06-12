// Add to cart functionality
let checkoutItems = JSON.parse(localStorage.getItem('checkout')) || [];

// Display checkout items
function displayCheckoutItems() {
  const checkoutWrapper = document.getElementById('checkout-wrapper');
  checkoutWrapper.innerHTML = '';
  let totalAmount = 0;
  checkoutItems.forEach((item, index) => {
    checkoutWrapper.innerHTML += `
      <div class="checkout-item">
        <img src="${item.img_url}" alt="${item.productName}">
        <h5>${item.productName}</h5>
        <p>Amount: ${item.amount} x $${item.price} = $${item.amount * item.price}</p>
        <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
    totalAmount += item.amount * item.price;
  });
  document.getElementById('total-amount').textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
}

// Remove from cart functionality
function removeFromCart(index) {
  checkoutItems.splice(index, 1);
  localStorage.setItem('checkout', JSON.stringify(checkoutItems));
  displayCheckoutItems();
}

// Call displayCheckoutItems() function when page loads
document.addEventListener('DOMContentLoaded', displayCheckoutItems);

// Add event listener to confirm button
document.getElementById('confirm-button').addEventListener('click', () => {
  // Process the order here, e.g. send a request to the server to complete the transaction
  console.log('Order confirmed!');
  // Clear the checkout items
  checkoutItems = [];
  localStorage.setItem('checkout', JSON.stringify(checkoutItems));
  displayCheckoutItems();
});