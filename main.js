// main.js

// Dữ liệu sản phẩm mẫu
const sampleProducts = [
    {
        id: 1,
        name: "Bóng đá Adidas",
        price: 300000,
        image: "img/bong_da_adidas.jpg",
        description: "Bóng đá Adidas chính hãng, chất liệu cao cấp, phù hợp cho mọi trận đấu. <br><br>Được thiết kế với độ bền cao, bề mặt bóng tối ưu cho lực sút và kiểm soát bóng."
    },
    {
        id: 2,
        name: "Găng tay Boxing",
        price: 450000,
        image: "img/gang_tay.jpg",
        description: "Găng tay boxing bền bỉ, bảo vệ tay tốt, phù hợp cho tập luyện và thi đấu. <br><br>Có lớp đệm êm ái, hỗ trợ cổ tay, và thiết kế thoáng khí."
    },
    {
        id: 3,
        name: "Giày chạy Nike",
        price: 900000,
        image: "img/giay_nike.jpg",
        description: "Giày chạy Nike thiết kế hiện đại, hỗ trợ tối ưu cho mọi bước chạy. <br><br>Đệm lót êm ái, đế giày chống trượt, phù hợp cho cả chạy bộ và tập luyện hàng ngày."
    }
];
// Lưu sản phẩm mẫu vào localStorage nếu chưa có
if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(sampleProducts));
}

// Hiển thị danh sách sản phẩm nổi bật
function loadFeaturedProducts() {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const featuredList = document.getElementById("featured-list");

    products.slice(0, 3).forEach(product => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        col.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Giá: ${product.price.toLocaleString()} VND</p>
                    <a href="products-detail.html" class="btn btn-outline-primary" onclick="viewProduct(${product.id})">Xem chi tiết</a>
                </div>
            </div>
        `;

        featuredList.appendChild(col);
    });
}

// Lưu ID sản phẩm để xem chi tiết
function viewProduct(id) {
    localStorage.setItem("selectedProductId", id);
}

// Danh sách video
const videoList = [
    "../video/motivational-video.mp4",
    "../video/sports-highlight.mp4",
    "../video/training-motivation.mp4"
];
let currentVideoIndex = 0;

// Xử lý khi tài liệu sẵn sàng
document.addEventListener("DOMContentLoaded", function () {
    // Tải sản phẩm nổi bật
    loadFeaturedProducts();

    // Hiển thị thông tin người dùng đã đăng nhập
    const userInfo = document.getElementById("userInfo");
    const userName = document.getElementById("userName");
    const loginLink = document.getElementById("loginLink");
    const registerLink = document.getElementById("registerLink");
    const logoutBtn = document.getElementById("logoutBtn");

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    // Xử lý đăng xuất
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }

    // Video tự động phát khi cuộn tới và xử lý nút chuyển video
    const video = document.getElementById("autoPlayVideo");
    const videoSource = document.getElementById("videoSource");
    const nextVideoBtn = document.getElementById("nextVideoBtn");

    if (video) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        video.play().catch((error) => {
                            console.log("Lỗi phát video:", error);
                        });
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(video);

        if (nextVideoBtn) {
            nextVideoBtn.addEventListener("click", function () {
                currentVideoIndex = (currentVideoIndex + 1) % videoList.length;
                videoSource.src = videoList[currentVideoIndex];
                video.load();
                video.play().catch((error) => {
                    console.log("Lỗi phát video:", error);
                });
            });
        }
    } else {
        console.log("Không tìm thấy video với ID 'autoPlayVideo'");
    }
});