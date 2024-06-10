// create products and store it on the local storage
let wrapper = document.querySelector('[recentProducts]')
let products = 
    JSON.parse(localStorage.getItem('products')) 
    ? JSON.parse(localStorage.getItem('products'))
    :localStorage.setItem('products', 
        JSON.stringify(
        [
            {
                id: 1,
                productName: "BMW M4 GTS",
                category: "BMW",
                description: "BMW M4 GTS",
                amount: 2 500 000,
                img_url: ""
              },
              {
                id: 2,
                productName: "Asheeka1",
                category: "Sheeks",
                description: "A picture of asheeka here at LCA",
                amount: 100.59,
                img_url: "https://asheekasamuels.github.io/All-Images/images/Asheeka1.jpg"
              },
              {
                id: 3,
                productName: "Aakifah",
                category: "Aakifah",
                description: "A picture of Aakifah here at LCA",
                amount: 100.59,
                img_url: "https://asheekasamuels.github.io/All-Images/images/Aakifah.jpg"
              },
              {
                id: 4,
                productName: "Kyle",
                category: "Kyle",
                description: "A picture of Kyle here at LCA",
                amount: 100.59,
                img_url: "https://asheekasamuels.github.io/All-Images/images/Kyle.jpg"
              },
              {
                id: 5,
                productName: "Asheeka2",
                category: "Tinkie",
                description: "A pic of Ash",
                amount: 100.59,
                img_url: "https://asheekasamuels.github.io/All-Images/images/Asheeka2.jpg"
              }
        ]
    )
)
// current year
let currentyear = new Date().getUTCFullYear()
document.querySelector('[currentYear]').textContent = currentyear
function recentProducts() {
  try {
    let arrSize = products.length
    let latestProducts = products.reverse().slice(0, arrSize >> 1)
    latestProducts.forEach(product => {
        wrapper.innerHTML += `
           <div class="card">
                <img src="${product.img_url}" class="card-img-top" alt="${product.productName}">
                <div class="card-body">
                    <h5 class="card-title">${product.productName}</h5>
                    <p class="card-text">${product.description}
                    </p>
                </div>
           </div>
        `
    })

  } catch (error) {
    wrapper.textContent ="please contact our administrator"
  }
}
recentProducts();
