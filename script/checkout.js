// display the year
document.querySelector('#year').innerHTML = new Date().getFullYear();

//empty array to store products
// let theCart = [];

// get cart objects from local storage
let addedToCart = JSON.parse(localStorage.getItem('addedToCart'));

//updates and saves array
function local() {
    localStorage.setItem('addedToCart', JSON.stringify(addedToCart));
    // get cart products from local storage
    addedToCart = JSON.parse(localStorage.getItem('addedToCart'));
}
//calls the tbody element
let table = document.querySelector('tbody');

// display cart items in the table
function cart() {
    // clear the table content
    table.innerHTML = '';

    // search through cart items and display in the table
    addedToCart.map((object, index) => {
        table.innerHTML += `
            <tbody id="clothing" >
                <tr style="font-size:12px;">
                    <td><input style="width:40px; background-color:#150022;color:#E5A1FC; font-family: poppin;border:none " type="number" value="${object.quantity}" id="quantity${index+1}"></td>
                    <td>${object.name}</td>
                    <td>R${+object.price * +object.quantity}</td>
                    <td>${object.description}</td>
                    <td><img src="${object.url}" style="width:60px; height: 60px;"/></td>
                </tr>
            </tbody>
            
        `;

    });
}

// call the cart function to display cart items in the table
cart();

// calling the id of the button
let purchased = document.getElementById('purchased');

purchased.addEventListener('click', bought);

// empty the array and to display alert
function bought() {
    try {
        alert('Thank you for purchasing');
        // clear the array
        addedToCart = [];
        totalPriceElement.innerText = 'R' + 0
        // update local storage
        local();
        // update the displayed cart
        cart();
    } catch {
        alert('Error')
    }
}

//calling the spinner
let spinspin = document.querySelector('.spinspin')

// display spinner if the cart is empty, otherwise display the cart
if (addedToCart.length === 0) {
    spinspin.innerHTML = `<div class="d-flex align-items-center" style="color:#E5A1FC">
        <strong role="status"></strong>
        <div class="spinner-border ms-auto" aria-hidden="true"></div>
    </div>`;
} else {
    cart(addedToCart);
}
// Assuming you have an element with the id 'totalPrice'
let totalPriceElement = document.getElementById('totalPrice');

function calculatePrice() {
    let totalPrice = addedToCart.reduce((total, object) => {
        console.log(total);
        console.log(object);
        // let quantity = document.querySelector(`#quantity${index+1}`).value* quantity
        return total + (object.price * object.quantity)
    }, 0)
    console.log(totalPrice);
    totalPriceElement.innerText = 'R' + totalPrice
}

calculatePrice()

let cart = {
    items: JSON.parse(localStorage.getItem('cart')) || [],
    
    addItemToCart(product) {
      this.items.push(product);
      localStorage.setItem('cart', JSON.stringify(this.items));
      updateCartCounter();
      displayCartItemsOnCheckoutPage();
    },
    
    updateCartCounter() {
      let counter = document.querySelector('[counter]');
      counter.textContent = `Cart (${this.items.length} items)`;
    },
    
    displayCartItemsOnCheckoutPage() {
      let checkoutContainer = document.querySelector('[checkout-container]');
      checkoutContainer.innerHTML = '';
      
      this.items.forEach((item) => {
        checkoutContainer.innerHTML += `
          <div class="cart-item">
            <h5>${item.productName}</h5>
            <p>Quantity: 1</p>
            <p>Amount: ${item.amount}</p>
          </div>
        `;
      });
    }
  };