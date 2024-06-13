// Create products and store it on the local storage
let products = JSON.parse(localStorage.getItem('products')) || [
    {
      productName: "BMW M4 GTS",
      category: "Sports Car",
      description: "BMW M4 GTS",
      amount: "R2500000",
      img_url: "https://zakariyasalie.github.io/allimages/images/M4GTS1.jpg"
    },
    {
      productName: "Ford Mustang",
      category: "Muscle Car",
      description: "5.0L V8 engine",
      amount: 2000000,
      img_url: "https://zakariyasalie.github.io/allimages/images/FM.jpg"
    },
    {
      productName: "Nissan GTR Skyline R35",
      category: "JDM Cars",
      description: "3.2L V6 biturbo",
      amount: 3500000,
      img_url: "https://zakariyasalie.github.io/allimages/images/R35.jpg"
    },
    {
      productName: "Audi R8 V10+",
      category: "Sports Car",
      description: "V10",
      amount: 1999000,
      img_url: "https://zakariyasalie.github.io/allimages/images/R8.jpg"
    },
    {
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
  let container = document.querySelector('[container]');
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
            <a href="#" class="btn btn-primary">Add to cart</a>
          </div>
        </div>
      `;
    });
  }
  
  // Function to filter products by search input

  displayProducts(products);
  
  searchProduct.addEventListener('keyup', () => {
    let filteredProducts = products.filter(product => product.productName.toLowerCase().includes(searchProduct.value.toLowerCase()));
    displayProducts(filteredProducts);
    if (!filteredProducts.length) {
      wrapper.textContent = `No products found for "${searchProduct.value}"`;
    }
  });
  
  // Function to sort products by amount
  let isToggle = false;
  sortingByAmount.addEventListener('click', () => {
    if (!isToggle) {
      products.sort((a, b) => b.amount - a.amount);
      sortingByAmount.textContent = 'Sorted by highest amount';
      isToggle = true;
    } else {
      products.sort((a, b) => a.amount - b.amount);
      sortingByAmount.textContent = 'Sorted by lowest amount';
      isToggle = false;
    }
    displayProducts(products);
  });
  
