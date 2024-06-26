// Create products and store them in local storage
let products = JSON.parse(localStorage.getItem('products')) || [
    {
      id: 1,
      productName: "BMW M4 GTS",
      category: "Sports Car",
      description: "BMW M4 GTS",
      amount: 2500000,
      img_url: "https://zakariyasalie.github.io/allimages/images/M4GTS1.jpg"
    },
    {
      id: 2,
      productName: "Ford Mustang",
      category: "Muscle Car",
      description: "5.0L V8 engine",
      amount: 2000000,
      img_url: "https://zakariyasalie.github.io/allimages/images/FM.jpg"
    },
    {
      id: 3,
      productName: "Nissan GTR Skyline R35",
      category: "JDM Cars",
      description: "3.2L V6 biturbo",
      amount: 3500000,
      img_url: "https://zakariyasalie.github.io/allimages/images/R35.jpg"
    },
    {
      id: 4,
      productName: "Audi R8 V10+",
      category: "Sports Car",
      description: "V10",
      amount: 1999000,
      img_url: "https://zakariyasalie.github.io/allimages/images/R8.jpg"
    },
    {
      id: 5,
      productName: "Golf R Mark8",
      category: "Family Car",
      description: "Mk8R Golf",
      amount: 1850000,
      img_url: "https://zakariyasalie.github.io/allimages/images/mk8.jpg"
    }
  ];
  localStorage.setItem('products', JSON.stringify(products));
  

// Get elements
let wrapper = document.querySelector('[recentProducts]');
let searchProduct = document.querySelector('#search-input');
let sortingByAmount = document.querySelector('#sortingByAmount');
let counter = document.querySelector('[counter]');

// Current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear();

// Function to display products
function displayProducts(products) {
    wrapper.innerHTML = '';
    products.forEach(product => {
      wrapper.innerHTML += `
        <div class="card">
          <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading='lazy'>
          <div class="card-body">
            <h5 class="card-title">${product.productName}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">${product.amount}</p>
            <button type='button' class="btn btn-success" onclick='addToCart(${JSON.stringify(product)})'>Add to cart</button>
          </div>
        </div>
      `;
    });
  }
  
// Function to filter products by search input
searchProduct.addEventListener('keyup', () => {
    let filteredProducts = products.filter(product => product.productName.toLowerCase().includes(searchProduct.value.toLowerCase()));
    if (filteredProducts.length) {
        displayProducts(filteredProducts);
    } else {
        wrapper.innerHTML = `No products found for "${searchProduct.value}"`;
    }
});

// Function to sort products by amount
let isToggle = false;
sortingByAmount.addEventListener('click', () => {
    if (!isToggle) {
        products.sort((a, b) => b.amount - a.amount);
        sortingByAmount.textContent = 'Sorted by highest amount';
    } else {
        products.sort((a, b) => a.amount - b.amount);
        sortingByAmount.textContent = 'Sorted by lowest amount';
    }
    isToggle = !isToggle;
    displayProducts(products);
});

// Add to cart
let cart = JSON.parse(localStorage.getItem('checkout')) || [];

function addToCart(product) {
  if (!product || !product.id || !product.productName) {
    alert('Invalid product. Please try again.');
    return;
  }
  try {
    cart.push(product);
    localStorage.setItem('checkout', JSON.stringify(cart));
    document.querySelector('[counter]').textContent = cart.length || 0;
  } catch (e) {
    console.error('Error adding product to cart:', e);
    alert('An error occurred while adding the product to the cart. Please try again later.');
  }
}

window.onload = () => {
  document.querySelector('[counter]').textContent = cart.length || 0;
};

// Initial display of products
displayProducts(products);
