// Script cho các tính năng như giỏ hàng, thanh toán và người dùng

// Giả sử giỏ hàng được lưu trong localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Thêm sản phẩm vào giỏ hàng
function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
}

// Hiển thị các sản phẩm trong giỏ hàng
function displayCart() {
    const cartContainer = document.querySelector('#cart-items');
    cartContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="images/${item.image}" alt="${item.name}">
            <div class="item-details">
                <h4>${item.name}</h4>
                <p>${item.price} VND</p>
            </div>
            <div class="item-actions">
                <input type="number" value="1">
                <button class="btn btn-danger" onclick="removeFromCart('${item.name}')">Xóa</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}
