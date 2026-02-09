// JavaScript functionality for the Nashta Centre website

// Function to load menu items
function loadMenu() {
    const menuItems = [
        { name: 'Aloo Paratha', price: 50 },
        { name: 'Chai', price: 20 },
        { name: 'Samosa', price: 15 }
    ];

    const menuContainer = document.getElementById('menu');
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.innerText = `${item.name} - ₹${item.price}`;
        menuContainer.appendChild(menuItem);
    });
}

// Event listener for page load
window.addEventListener('load', loadMenu);