// products.js

const sampleProducts = [
    {
        id: 1,
        name: "Bóng đá Adidas",
        price: 300000,
        image: "img/bong_da_adidas.jpg",
        description: "Bóng đá Adidas chính hãng, chất liệu cao cấp, phù hợp cho mọi trận đấu."
    },
    {
        id: 2,
        name: "Găng tay Boxing",
        price: 450000,
        image: "img/gang_tay.jpg",
        description: "Găng tay boxing bền bỉ, bảo vệ tay tốt, phù hợp cho tập luyện và thi đấu."
    },
    {
        id: 3,
        name: "Giày chạy Nike",
        price: 900000,
        image: "img/giay_nike.jpg",
        description: "Giày chạy Nike thiết kế hiện đại, hỗ trợ tối ưu cho mọi bước chạy."
    },
    {
        id: 4,
        name: "Áo thể thao Puma",
        price: 500000,
        image: "img/ao_puma.jpg",
        description: "Áo thể thao Puma thoáng mát, thấm hút mồ hôi tốt. <br><br>Phù hợp cho chạy bộ, tập gym và các hoạt động thể thao ngoài trời."
    },
    {
        id: 5,
        name: "Tạ tay 5kg",
        price: 200000,
        image: "img/ta_tay_5kg.jpg",
        description: "Tạ tay 5kg chất liệu thép không gỉ, bọc cao su chống trượt. <br><br>Phù hợp cho tập luyện tại nhà hoặc phòng gym."
    },
    {
        id: 6,
        name: "Dây nhảy thể thao",
        price: 120000,
        image: "img/day_nhay.jpg",
        description: "Dây nhảy thể thao nhẹ, bền, có thể điều chỉnh độ dài. <br><br>Giúp tăng cường sức khỏe tim mạch và đốt cháy calo hiệu quả."
    },
    {
        id: 7,
        name: "Bóng rổ Molten",
        price: 350000,
        image: "img/bong_ro_molten.jpg",
        description: "Bóng rổ Molten chính hãng, độ bám tốt, phù hợp cho sân trong nhà và ngoài trời. <br><br>Được sử dụng trong nhiều giải đấu chuyên nghiệp."
    },
    {
        id: 8,
        name: "Thảm tập Yoga",
        price: 250000,
        image: "img/tham_yoga.jpg",
        description: "Thảm tập Yoga dày 6mm, chống trượt, chất liệu thân thiện với môi trường. <br><br>Phù hợp cho yoga, pilates và các bài tập tại nhà."
    },
    {
        id: 9,
        name: "Bình nước thể thao 1L",
        price: 150000,
        image: "img/binh_nuoc.jpg",
        description: "Bình nước thể thao 1L, chất liệu nhựa cao cấp, không BPA. <br><br>Có vạch đo và nắp chống rò rỉ, tiện lợi khi tập luyện."
    },
    {
        id: 10,
        name: "Gậy đánh golf",
        price: 1200000,
        image: "img/gay_golf.jpg",
        description: "Gậy đánh golf chất lượng cao, thiết kế chuyên nghiệp. <br><br>Phù hợp cho người mới chơi và golfer có kinh nghiệm."
    }
];


localStorage.setItem("products", JSON.stringify(sampleProducts));

function loadProducts() {
    
    const products = JSON.parse(localStorage.getItem("products")) || [];
    console.log("Products loaded:", products); 
    const productsList = document.getElementById("products-list");

    
    if (!productsList) {
        console.error("Element with ID 'products-list' not found");
        return;
    }

   
    productsList.innerHTML = "";

   
    products.forEach(product => {
        console.log("Rendering product:", product); 
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        col.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Giá: ${product.price.toLocaleString()} VND</p>
                    <p class="card-text">${product.description ? product.description.split('<br>')[0] : 'Không có mô tả'}</p>
                    <a href="products-detail.html?id=${product.id}" class="btn btn-outline-primary">Xem chi tiết</a>
                </div>
            </div>
        `;

        productsList.appendChild(col);
    });
}

// Đảm bảo hàm chạy khi trang tải xong
document.addEventListener("DOMContentLoaded", loadProducts);