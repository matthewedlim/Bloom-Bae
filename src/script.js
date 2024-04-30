// Initialize product array with hardcoded values
let products = [
];

// Function to display products
function displayProducts() {
    const tableBody = document.getElementById('productTableBody');
    tableBody.innerHTML = '';

    products.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td><button class="deleteBtn" onclick="deleteProduct(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to delete a product
function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts();
}

// Add product form submit event listener
document.getElementById('addProductForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);

    if (name.trim() !== '' && !isNaN(price)) {
        products.push({ name: name, price: `₱
        ${price}` });
        displayProducts();
        closeModal();
        // Reset form fields
        document.getElementById('addProductForm').reset();
    } else {
        alert('Please fill in all fields correctly.');
    }
});

// Modal functionality
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementsByClassName('close')[0];

openModalBtn.onclick = function() {
    modal.style.display = 'block';
}

closeModalBtn.onclick = closeModal;

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

function closeModal() {
    modal.style.display = 'none';
}

displayProducts();
