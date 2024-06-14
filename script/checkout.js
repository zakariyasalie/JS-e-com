document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('checkout')) || [];
    const tbody = document.querySelector('tbody');
    const totalPriceElement = document.getElementById('totalPrice');
    
    let totalPrice = 0;
  
    // Create a map to count quantities
    const productQuantities = cart.reduce((acc, product) => {
      if (acc[product.id]) {
        acc[product.id].quantity += 1;
      } else {
        acc[product.id] = { ...product, quantity: 1 };
      }
      return acc;
    }, {});
  
    Object.values(productQuantities).forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${product.quantity}</td>
        <td>${product.productName}</td>
        <td>R${(product.amount * product.quantity).toLocaleString()}</td>
        <td>${product.description}</td>
        <td><img src="${product.img_url}" alt="${product.productName}" style="width: 50px;"></td>
      `;
      tbody.appendChild(row);
      totalPrice += product.amount * product.quantity;
    });
  
    totalPriceElement.textContent = `R${totalPrice.toLocaleString()}`;
  
    document.getElementById('purchased').addEventListener('click', () => {
      if (cart.length > 0) {
        alert('Purchase successful!');
        localStorage.removeItem('checkout');
        tbody.innerHTML = ''; // Clear the table body
        totalPriceElement.textContent = 'R0.00'; // Reset total price
        window.location.href = '../index.html'; // Redirect to home or confirmation page
      } else {
        alert('Your cart is empty.');
      }
    });
  });
  