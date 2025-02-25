document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("add-product-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const photo = document.getElementById("product-photo").value;
        const title = document.getElementById("product-title").value;
        const description = document.getElementById("product-description").value;
        const price = document.getElementById("product-price").value;
        const quantity = document.getElementById("product-quantity").value;

        // Basic validation (could be enhanced)
        if (!photo || !title || !description || !price || !quantity) {
            alert("All fields are required.");
            return;
        }

        const newProduct = {
            image: photo,
            title: title,
            description: description,
            price: "$" + parseFloat(price).toFixed(2), // Format price with 2 decimal places
            quantity: quantity
        };

        console.log("New Product Added:", newProduct);

        // Optionally, you can store this product in a list or database
        // For now, let's log it to the console

        // Optionally, clear the form after submission
        form.reset();
    });
});