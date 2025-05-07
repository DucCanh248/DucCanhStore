// cart.js

// Hiển thị danh sách sản phẩm trong giỏ hàng
function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cartTotal");

    cartList.innerHTML = ""; 
    let total = 0;

    if (cart.length === 0) {
        cartList.innerHTML = "<p class='text-center'>Giỏ hàng của bạn đang trống.</p>";
        cartTotal.textContent = "0";
        return;
    }

    cart.forEach((item, index) => {
        const productTotal = item.price * item.quantity;
        total += productTotal;

        const row = document.createElement("div");
        row.className = "row mb-3 align-items-center border-bottom pb-3";
        row.innerHTML = `
            <div class="col-md-2">
                <img src="${item.image}" class="img-fluid rounded" alt="${item.name}">
            </div>
            <div class="col-md-4">
                <h5>${item.name}</h5>
            </div>
            <div class="col-md-2">
                <p>${item.price.toLocaleString()} VND</p>
            </div>
            <div class="col-md-2">
                <input type="number" class="form-control quantity-input" value="${item.quantity}" min="1" data-index="${index}">
            </div>
            <div class="col-md-1">
                <button class="btn btn-danger btn-sm remove-btn" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <div class="col-md-1 text-end">
                <p>${productTotal.toLocaleString()} VND</p>
            </div>
        `;
        cartList.appendChild(row);
    });

    cartTotal.textContent = total.toLocaleString();

    // Xử lý thay đổi số lượng
    document.querySelectorAll(".quantity-input").forEach(input => {
        input.addEventListener("change", function () {
            const index = this.dataset.index;
            const newQuantity = parseInt(this.value);
            if (newQuantity < 1) this.value = 1;
            cart[index].quantity = Math.max(1, newQuantity);
            localStorage.setItem("cart", JSON.stringify(cart));
            loadCart(); 
        });
    });

    // Xử lý xóa sản phẩm
    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", function () {
            const index = this.dataset.index;
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            loadCart();
        });
    });
}

document.addEventListener("DOMContentLoaded", loadCart);