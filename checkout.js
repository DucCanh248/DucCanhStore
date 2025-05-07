// checkout.js

// Hiển thị tóm tắt đơn hàng
function loadOrderSummary() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const orderSummary = document.getElementById("order-summary");
    const orderTotal = document.getElementById("orderTotal");

    orderSummary.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        orderSummary.innerHTML = "<p class='text-center'>Giỏ hàng của bạn đang trống.</p>";
        orderTotal.textContent = "0";
        return;
    }

    cart.forEach(item => {
        const productTotal = item.price * item.quantity;
        total += productTotal;

        const row = document.createElement("div");
        row.className = "row mb-3 border-bottom pb-3";
        row.innerHTML = `
            <div class="col-6">
                <p>${item.name} (x${item.quantity})</p>
            </div>
            <div class="col-6 text-end">
                <p>${productTotal.toLocaleString()} VND</p>
            </div>
        `;
        orderSummary.appendChild(row);
    });

    orderTotal.textContent = total.toLocaleString();
}

// Xử lý đặt hàng
function handleCheckout() {
    const fullName = document.getElementById("fullName").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const paymentMethod = document.getElementById("paymentMethod").value;

    if (!fullName || !address || !phone) {
        alert("Vui lòng điền đầy đủ thông tin giao hàng!");
        return;
    }

    // Xóa giỏ hàng sau khi đặt hàng thành công
    localStorage.removeItem("cart");
    alert("Đặt hàng thành công! Cảm ơn bạn đã mua sắm.");
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
    loadOrderSummary();

    const placeOrderBtn = document.getElementById("placeOrderBtn");
    placeOrderBtn.addEventListener("click", handleCheckout);
});