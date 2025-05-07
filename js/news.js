// news.js

// Dữ liệu tin tức mẫu (bao gồm trường content)
const sampleNews = [
    {
        id: 1,
        title: "Top 5 Mẹo Chọn Giày Chạy Bộ Phù Hợp",
        description: "Tìm hiểu cách chọn giày chạy bộ phù hợp với từng loại bàn chân và phong cách chạy.",
        content: "Chọn giày chạy bộ không chỉ là vấn đề thẩm mỹ mà còn ảnh hưởng lớn đến hiệu suất và sức khỏe của bạn. Dưới đây là 5 mẹo quan trọng: <br><br>1. **Xác định loại bàn chân**: Bàn chân của bạn có thể là vòm cao, vòm thấp hoặc trung bình. Hãy kiểm tra dấu chân ướt để biết loại bàn chân của mình.<br>2. **Chọn kích cỡ phù hợp**: Luôn thử giày vào buổi chiều khi bàn chân đã nở to nhất.<br>3. **Kiểm tra độ linh hoạt**: Giày chạy bộ cần có độ linh hoạt tốt để hỗ trợ chuyển động tự nhiên.<br>4. **Chú ý đến đệm lót**: Đệm lót tốt sẽ giúp giảm chấn và bảo vệ khớp.<br>5. **Thử chạy thực tế**: Hãy chạy thử một đoạn ngắn trong cửa hàng để cảm nhận sự thoải mái.<br><br>Hy vọng những mẹo này sẽ giúp bạn tìm được đôi giày chạy bộ lý tưởng!",
        image: "../img/news1.jpg",
        date: "2025-04-10"
    },
    {
        id: 2,
        title: "Lợi Ích Của Việc Tập Luyện Với Găng Tay Boxing",
        description: "Găng tay boxing không chỉ bảo vệ tay mà còn giúp cải thiện hiệu quả tập luyện.",
        content: "Găng tay boxing là một trong những dụng cụ không thể thiếu khi tập luyện môn thể thao này. Dưới đây là những lợi ích chính: <br><br>1. **Bảo vệ tay và cổ tay**: Găng tay giúp giảm nguy cơ chấn thương khi đấm.<br>2. **Tăng lực đấm**: Thiết kế của găng tay giúp phân tán lực đều hơn.<br>3. **Cải thiện kỹ thuật**: Găng tay boxing khuyến khích bạn giữ cổ tay thẳng, cải thiện tư thế đấm.<br>4. **Thoải mái hơn**: Lớp đệm trong găng tay mang lại cảm giác thoải mái khi tập luyện lâu.<br>5. **Tăng sự tự tin**: Khi tay được bảo vệ, bạn sẽ tự tin hơn khi tập luyện.<br><br>Hãy chọn găng tay phù hợp với kích cỡ và mục đích tập luyện của bạn để đạt hiệu quả tốt nhất!",
        image: "../img/news2.jpg",
        date: "2025-04-08"
    },
    {
        id: 3,
        title: "Xu Hướng Dụng Cụ Thể Thao Năm 2025",
        description: "Cập nhật những dụng cụ thể thao đang được ưa chuộng nhất trong năm nay.",
        content: "Năm 2025 chứng kiến nhiều xu hướng mới trong lĩnh vực dụng cụ thể thao. Dưới đây là những điểm nổi bật: <br><br>1. **Dụng cụ thông minh**: Các thiết bị như đồng hồ thể thao tích hợp AI đang ngày càng phổ biến.<br>2. **Chất liệu bền vững**: Nhiều sản phẩm được làm từ vật liệu tái chế, thân thiện với môi trường.<br>3. **Thiết kế tối giản**: Dụng cụ thể thao có thiết kế nhẹ, gọn, dễ mang theo.<br>4. **Tích hợp công nghệ VR**: Một số dụng cụ hỗ trợ tập luyện với thực tế ảo.<br>5. **Màu sắc nổi bật**: Các gam màu neon đang trở thành xu hướng trong thiết kế dụng cụ.<br><br>Hãy cập nhật ngay những xu hướng này để không bị tụt hậu trong hành trình tập luyện của bạn!",
        image: "../img/news3.jpg",
        date: "2025-04-05"
    }
];

// Ghi đè localStorage để đảm bảo dữ liệu mới nhất
localStorage.setItem("news", JSON.stringify(sampleNews));

// Hiển thị danh sách tin tức
function loadNews() {
    const news = JSON.parse(localStorage.getItem("news")) || [];
    const newsList = document.getElementById("news-list");

    if (!newsList) {
        console.error("Element with ID 'news-list' not found");
        return;
    }

    newsList.innerHTML = ""; // Xóa nội dung cũ

    news.forEach(article => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        col.innerHTML = `
            <div class="card h-100">
                <img src="${article.image}" class="card-img-top" alt="${article.title}">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="text-muted">${article.date}</p>
                    <p class="card-text">${article.description}</p>
                    <a href="news-detail.html?id=${article.id}" class="btn btn-outline-primary">Đọc thêm</a>
                </div>
            </div>
        `;

        newsList.appendChild(col);
    });
}

// Gọi hàm load khi tài liệu sẵn sàng
document.addEventListener("DOMContentLoaded", loadNews);