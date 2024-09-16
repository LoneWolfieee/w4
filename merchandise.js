document.addEventListener('DOMContentLoaded', () => {
    const merchandise = [
        { name: 'Festival T-Shirt', price: 500, description: '100% cotton, available in multiple sizes' },
        { name: 'Cap', price: 300, description: 'Stylish festival cap' },
        { name: 'Mug', price: 200, description: 'Festival-themed mug' }
    ];

    const merchandiseList = document.getElementById('merchandise-list');

    merchandise.forEach(item => {
        const merchCard = document.createElement('div');
        merchCard.classList.add('event-card');

        merchCard.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: ₹${item.price}</p>
            <p>${item.description}</p>
            <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
        `;

        merchandiseList.appendChild(merchCard);
    });
});

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart`);
}
