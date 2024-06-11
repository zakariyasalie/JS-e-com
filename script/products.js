// Create products and store it on the local storage
let wrapper = document.querySelector('[recentProducts]')
let products =
    JSON.parse(localStorage.getItem('products'))
        ? JSON.parse(localStorage.getItem('products'))
        : localStorage.setItem('products',
            JSON.stringify(
                [
                    {
                        productName: "BMW M4 GTS",
                        category: "Sports Car",
                        description: "BMW M4 GTS",
                        amount: 2500000,
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
                      },
                ]
            )
        );
// Current year
document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear();
function recentProducts() {
    try {
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
    } catch (e) {
        wrapper.textContent = "Please contact our administrator";
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
}
recentProducts();
// keyup
searchProduct.addEventListener('keyup', () => {
    try {
        if (searchProduct.value.length < 1) {
            displayProducts(products)
        }
        let filteredProduct = products.filter(product => product.productName.toLowerCase().includes(searchProduct.value))
        displayProducts(filteredProduct)
        if (!filteredProduct.length) throw new Error(`${searchProduct.value} product was not found`)
    } catch (e) {
        container.textContent = e.message || 'Please try again later'
    }
})
// Sorting by ascending and descending
let isToggle = false
sortingByAmount.addEventListener('click', () => {
    try {
        if (!products) throw new Error('Please try again later')
        if (!isToggle) {
            products.sort((a, b) => b.amount - a.amount)
            sortingByAmount.textContent = 'Sorted by highest amount'
            isToggle = true
        } else {
            products.sort((a, b) => a.amount - b.amount)
            sortingByAmount.textContent = 'Sorted by lowest amount'
            isToggle = false
        }
        displayProducts(products)
    } catch (e) {
        container.textContent = e.message || 'We are working on this issue'
    }
})
// Add to cart
function addToCart(product) {
    try {
        checkoutItems.push(product)
        localStorage.setItem('checkout', JSON.stringify(checkoutItems))
        document.querySelector('[counter]').textContent = checkoutItems.length || 0
    } catch (e) {
        alert("Unable to add to cart")
    }
}
window.onload = () => {
    document.querySelector('[counter]').textContent = checkoutItems.length || 0
}

14

