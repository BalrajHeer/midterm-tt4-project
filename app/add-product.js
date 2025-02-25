document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("add-product-form");
    const imageInput = document.getElementById("product-photo");
    const imagePreview = document.getElementById("image-preview");

    // Preview Image Before Upload
    imageInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                imagePreview.classList.remove("d-none");
            };
            reader.readAsDataURL(file);
        }
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const file = imageInput.files[0];
        if (!file) {
            alert("Please upload an image.");
            return;
        }

        const title = document.getElementById("product-title").value;
        const description = document.getElementById("product-description").value;
        const price = document.getElementById("product-price").value;
        const quantity = document.getElementById("product-quantity").value;

        if (!title || !description || !price || !quantity) {
            alert("All fields are required.");
            return;
        }

        // Convert Image File to Base64
        const reader = new FileReader();
        reader.onload = function(e) {
            const newProduct = {
                image: e.target.result,  // Base64 image data
                title: title,
                description: description,
                price: "$" + parseFloat(price).toFixed(2),
                quantity: quantity
            };

            console.log("New Product Added:", newProduct);

            form.reset();
            imagePreview.classList.add("d-none");
        };
        reader.readAsDataURL(file);
    });
});
