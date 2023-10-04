document.addEventListener('DOMContentLoaded', function () {
    const cartItems = [];

    function updateCartDisplay() {
        const cartList = document.getElementById('cart-items');
        cartList.innerHTML = '';

        let totalPrice = 0;

        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartList.appendChild(li);

            totalPrice += item.price;
        });

        const totalElement = document.createElement('li');
        totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
        cartList.appendChild(totalElement);

        const cartIcon = document.getElementById('cart-icon');
        cartIcon.textContent = `🛒 ${cartItems.length}`;
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productName = this.getAttribute('data-product');
            let productPrice = parseFloat(this.getAttribute('data-price'));

            // Check if an add-on checkbox is present
            const addonCheckbox = this.parentElement.querySelector('.addon');
            if (addonCheckbox && addonCheckbox.checked) {
                const addOnPrice = parseFloat(addonCheckbox.getAttribute('data-add-price'));
                productPrice += addOnPrice;
            }

            cartItems.push({ name: productName, price: productPrice });
            updateCartDisplay();
        });
    });


    document.getElementById('checkout-button').addEventListener('click', function () {
        const cartItemsInput = document.getElementById('cart-items-input');
        cartItemsInput.value = JSON.stringify(cartItems);

        const checkoutModal = document.getElementById('checkout-modal');
        const cartModal = document.getElementById('cart-modal');
        checkoutModal.style.display = 'block';
        cartModal.style.display = 'none';
    });

    document.getElementById('cart-icon').addEventListener('click', function () {
        const cartModal = document.getElementById('cart-modal');
        cartModal.style.display = 'block';
    });

    // Add close functionality to modals
    const modals = document.getElementsByClassName('modal');

    Array.from(modals).forEach(modal => {
        const closeButton = modal.querySelector('.close');
        closeButton.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    });
});
