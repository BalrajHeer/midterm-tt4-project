import './list-products.scss';

// Import images
import camera from "./assets/images/camera.jpg";
import cart from "./assets/images/cart.jpg";
import cream from "./assets/images/cream.jpg";
import lens from "./assets/images/lens.jpg";
import lighter from "./assets/images/lighter.jpg";
import lipstick from "./assets/images/lipstic.jpg";
import milk from "./assets/images/milk.jpg";
import pen from "./assets/images/pen.jpg";
import perfume from "./assets/images/perfume.jpg";
import enginakyurt from "./assets/images/pexels-enginakyurt-4458519.jpg";
import quang from "./assets/images/pexels-quang-viet-nguyen-107013384-9561297.jpg";
import yaazhini from "./assets/images/pexels-yaazhini-17307532.jpg";

document.addEventListener("DOMContentLoaded", () => {
    // Sidebar toggle functionality
    const sidebarToggle = document.getElementById("sidebarToggle");
    const wrapper = document.getElementById("wrapper");
    
    sidebarToggle.addEventListener("click", () => {
        wrapper.classList.toggle("toggled");
    });
    
    // Product list container
    const productsContainer = document.getElementById("products");

    // Product data
    const products = [
        { name: 'Camera', description: 'A high-quality camera.', price: '$9.99', image: camera },
        { name: 'Cart', description: 'A sturdy shopping cart.', price: '$14.99', image: cart },
        { name: 'Cream', description: 'A nourishing skin cream.', price: '$14.99', image: cream },
        { name: 'Lens', description: 'A professional camera lens.', price: '$14.99', image: lens },
        { name: 'Lighter', description: 'A durable lighter.', price: '$14.99', image: lighter },
        { name: 'Lipstick', description: 'A vibrant lipstick shade.', price: '$14.99', image: lipstick },
        { name: 'Milk', description: 'A fresh bottle of milk.', price: '$14.99', image: milk },
        { name: 'Pen', description: 'A smooth writing pen.', price: '$14.99', image: pen },
        { name: 'Perfume', description: 'A luxurious fragrance.', price: '$14.99', image: perfume },
        { name: 'Enginakyurt', description: 'A unique product.', price: '$14.99', image: enginakyurt },
        { name: 'Quang', description: 'A stylish item.', price: '$14.99', image: quang },
        { name: 'Yaazhini', description: 'An elegant accessory.', price: '$14.99', image: yaazhini }
    ];

    // Create table container
    const table = document.createElement("table");
    table.classList.add("table", "table-bordered", "table-striped", "text-center", "w-100");

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    ["Product", "Description", "Price", "Action"].forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    products.forEach((product, index) => {
        if (index % 3 === 0) {
            row = document.createElement("tr");
            tbody.appendChild(row);
        }
        const td = document.createElement("td");
        td.style.padding = "15px";
        td.style.verticalAlign = "middle";

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
        img.style.width = "120px";
        img.style.height = "120px";
        img.style.display = "block";
        img.style.margin = "auto";
        
        const title = document.createElement("h5");
        title.textContent = product.name;
        
        const description = document.createElement("p");
        description.textContent = product.description;
        
        const price = document.createElement("p");
        price.innerHTML = `<strong>${product.price}</strong>`;
        
        const addToCart = document.createElement("button");
        addToCart.classList.add("btn", "btn-primary");
        addToCart.textContent = "Add to Cart";
        addToCart.onclick = () => alert(`Added ${product.name} to cart!`);
        
        td.appendChild(img);
        td.appendChild(title);
        td.appendChild(description);
        td.appendChild(price);
        td.appendChild(addToCart);
        row.appendChild(td);
    });

    table.appendChild(tbody);
    productsContainer.appendChild(table);
});
