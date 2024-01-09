
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Phyzo App</title>
</head>
<body>
    <header>
        <h1>Welcome to the Phyzo Greeting App</h1>
    </header>
    <main>
        <section id="products">
            <h2>Our Products</h2>
            <!-- Product list goes here -->
            <div class="product">
                <img src="product1.jpg" alt="Product 1">
                <h3>Product 1</h3>
                <p>Description of Product 1.</p>
                <button onclick="addToCart(1)">Add to Cart</button>
            </div>
            <div class="product">
                <img src="product2.jpg" alt="Product 2">
                <h3>Product 2</h3>
                <p>Description of Product 2.</p>
                <button onclick="addToCart(2)">Add to Cart</button>
            </div>
            <!-- Add more products as needed -->
        </section>
        <section id="cart">
            <h2>Shopping Cart</h2>
            <!-- Cart items go here -->
            <ul id="cartItems"></ul>
            <p>Total: $<span id="totalPrice">0.00</span></p>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 Commercial Web App</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>


