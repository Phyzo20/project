let cartItems = [];
let totalPrice = 0;

function addToCart(productId) {
    // Add logic to fetch product details from the server/database
    // For simplicity, we'll assume a static product with a price

    const product = {
        id: productId,
        name: `Product ${productId}`,
        price: 19.99 // Replace with actual price
    };

    cartItems.push(product);
    totalPrice += product.price;

    updateCartUI();
}

function updateCartUI() {
    const cartItemsElement = document.getElementById("cartItems");
    const totalElement = document.getElementById("totalPrice");

    // Clear previous items
    cartItemsElement.innerHTML = "";

    // Populate cart items
    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
    });

    // Update total price
    totalElement.textContent = totalPrice.toFixed(2);
}

