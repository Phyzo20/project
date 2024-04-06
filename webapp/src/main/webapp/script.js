document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");

    // Sample product data
    const products = [
        { name: "Product 1", description: "Description of product 1.", price: "$15.00" },
        { name: "Product 2", description: "Description of product 2.", price: "$22.00" },
        { name: "Product 3", description: "Description of product 3.", price: "$31.00" }
    ];

    // Render products
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: ${product.price}</p>
        `;
        productList.appendChild(productDiv);
    });
});

