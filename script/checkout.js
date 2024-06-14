 // get the table element
let table = document.querySelector('.tab');

// get the total price element
let totalPriceElement = document.getElementById('totalPrice');

// get the purchase button element
let purchaseButton = document.getElementById('purchased');

// get the spin spin element
let spinSpinElement = document.querySelector('.spinspin');

// example function to update the total price
function updateTotalPrice() {
  let totalPrice = 0; // calculate the total price
  totalPriceElement.textContent = `R${totalPrice.toFixed(2)}`;
}

// example function to handle purchase button click
purchaseButton.addEventListener('click', function() {
  // handle purchase logic here
  console.log('Purchase button clicked!');
});

// example function to show/hide spin spin element
function showSpinSpin() {
  spinSpinElement.style.display = 'block';
}

function hideSpinSpin() {
  spinSpinElement.style.display = 'none';
}

// call the updateTotalPrice function to initialize the total price
updateTotalPrice();