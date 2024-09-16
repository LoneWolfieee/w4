document.addEventListener('DOMContentLoaded', () => {
    const cartList = document.getElementById('cart-list');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartList.innerHTML = '<p>Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `<p>${item.name} - ₹${item.price}</p>`;
            cartList.appendChild(itemElement);
        });
    }
});

function proceedToPayment() {
    // Redirect to payment page
    window.location.href = 'payment.html';
}
