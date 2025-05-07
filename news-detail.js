// news-detail.js

document.addEventListener("DOMContentLoaded", function () {
    // Lấy ID từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = parseInt(urlParams.get("id"));

    // Kiểm tra ID hợp lệ
    if (!newsId) {
        document.getElementById("newsTitle").textContent = "Lỗi";
        document.getElementById("newsContent").innerHTML = "<p>Không tìm thấy ID bài viết.</p>";
        return;
    }

    // Lấy dữ liệu từ localStorage
    const news = JSON.parse(localStorage.getItem("news")) || [];
    const article = news.find(item => item.id === newsId);

    // Hiển thị bài viết
    if (article) {
        document.getElementById("newsTitle").textContent = article.title || "Không có tiêu đề";
        document.getElementById("newsDate").textContent = article.date || "Không có ngày";
        document.getElementById("newsImage").src = article.image || "https://via.placeholder.com/800x400?text=News+Image";
        document.getElementById("newsContent").innerHTML = article.content || "<p>Không có nội dung chi tiết.</p>";
    } else {
        document.getElementById("newsTitle").textContent = "Bài viết không tồn tại";
        document.getElementById("newsContent").innerHTML = "<p>Xin lỗi, chúng tôi không tìm thấy bài viết này.</p>";
    }
});