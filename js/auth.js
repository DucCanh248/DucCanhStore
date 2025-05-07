// auth.js


document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

           
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
              
                localStorage.setItem("loggedInUser", JSON.stringify(user));
                alert("Đăng nhập thành công!");
                window.location.href = "index.html";
            } else {
                alert("Email hoặc mật khẩu không đúng!");
            }
        });
    }

    // Xử lý đăng ký với kiểm tra regex
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("registerName").value;
            const email = document.getElementById("registerEmail").value;
            const password = document.getElementById("registerPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            // Regex
            const nameRegex = /^[A-Za-z\s]{2,50}$/; // Họ tên: chỉ chữ và khoảng cách, 2-50 ký tự
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email hợp lệ
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // Mật khẩu: ít nhất 6 ký tự, có chữ và số

            // Kiểm tra họ tên
            if (!nameRegex.test(name)) {
                alert("Họ và tên không hợp lệ! Chỉ dùng chữ cái và khoảng cách, từ 2-50 ký tự.");
                return;
            }

            // Kiểm tra email
            if (!emailRegex.test(email)) {
                alert("Email không hợp lệ!");
                return;
            }

            // Kiểm tra mật khẩu
            if (!passwordRegex.test(password)) {
                alert("Mật khẩu không hợp lệ! Phải có ít nhất 6 ký tự, bao gồm cả chữ và số.");
                return;
            }

            // Kiểm tra mật khẩu xác nhận
            if (password !== confirmPassword) {
                alert("Mật khẩu xác nhận không khớp!");
                return;
            }

            // Lưu thông tin người dùng vào localStorage
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const userExists = users.some(u => u.email === email);

            if (userExists) {
                alert("Email đã được đăng ký!");
            } else {
                users.push({ name, email, password });
                localStorage.setItem("users", JSON.stringify(users));
                alert("Đăng ký thành công! Vui lòng đăng nhập.");
                window.location.href = "login.html";
            }
        });
    }
});