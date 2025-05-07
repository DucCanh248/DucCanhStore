// product-detail.js

// Lấy ID từ URL và hiển thị chi tiết sản phẩm
document.addEventListener("DOMContentLoaded", function () {
    // Lấy ID từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));

    // Kiểm tra xem ID có tồn tại không
    if (!productId) {
        console.error("Không tìm thấy ID sản phẩm trong URL");
        document.getElementById("productName").textContent = "Lỗi";
        document.getElementById("productDescription").innerHTML = "<p>Không tìm thấy ID sản phẩm.</p>";
        return;
    }

    // Lấy dữ liệu từ localStorage
    const products = JSON.parse(localStorage.getItem("products")) || [];
    console.log("Dữ liệu sản phẩm trong localStorage:", products);

    // Tìm sản phẩm theo ID
    const product = products.find(item => item.id === productId);

    // Kiểm tra xem sản phẩm có tồn tại không
    if (product) {
        console.log("Sản phẩm tìm thấy:", product);
        document.getElementById("productName").textContent = product.name;
        document.getElementById("productPrice").textContent = `Giá: ${product.price.toLocaleString()} VND`;
        document.getElementById("productImage").src = product.image;

        if (product.description) {
            document.getElementById("productDescription").innerHTML = product.description;
        } else {
            console.warn("Sản phẩm không có trường description:", product);
            document.getElementById("productDescription").innerHTML = "<p>Không có mô tả cho sản phẩm này.</p>";
        }

        // Xử lý thêm vào giỏ hàng
        const addToCartBtn = document.querySelector(".btn-primary");
        addToCartBtn.addEventListener("click", function () {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            const existingItem = cart.find(item => item.id === product.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Đã thêm sản phẩm vào giỏ hàng!");
            window.location.href = "cart.html";
        });
    } else {
        console.error("Không tìm thấy sản phẩm với ID:", productId);
        document.getElementById("productName").textContent = "Sản phẩm không tồn tại";
        document.getElementById("productDescription").innerHTML = "<p>Xin lỗi, chúng tôi không tìm thấy sản phẩm này.</p>";
    }
});