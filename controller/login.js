// Lấy thông tin các trường từ DOM
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");

// Thêm sự kiện input vào trường email
emailInput.addEventListener("input", function () {
    if (emailInput.value) {
        // Nếu trường email có giá trị thì thêm class
        emailInput.classList.add("has-value");
    } else {
        // Nếu trường email không có giá trị thì xóa class
        emailInput.classList.remove("has-value");
    }
});

// Thêm sự kiện input vào trường password
passwordInput.addEventListener("input", function () {
    if (passwordInput.value) {
        // Nếu trường password có giá trị thì thêm class
        passwordInput.classList.add("has-value");
    } else {
        // Nếu trường password không có giá trị thì xóa class
        passwordInput.classList.remove("has-value");
    }
});

// Thêm sự kiện submit vào form login
loginButton.addEventListener("click", function (e) {
    // Ngăn chặn hành vi mặc định của nút Log in
    e.preventDefault();
    // Lấy giá trị từ trường email và password
    let email = emailInput.value;
    let password = passwordInput.value;

    // Thực hiện xác thực
    if (!email || !password) {
        alert("Vui lòng điền đầy đủ thông tin.");
    } else if (!validateEmail(email)) {
        alert("Email không hợp lệ. Email phải chứa ký tự '@' và đúng định dạng.");
    } else {
        // Nếu xác thực thành công, chuyển hướng đến trang chủ
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = "../index.html";
    }
});

// Hàm kiểm tra điều kiện của email
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}