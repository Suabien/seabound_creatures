var loginBtn = document.getElementById('login-btn');
var logoutBtn = document.getElementById('logout-btn');

if (localStorage.getItem('isLoggedIn') === 'true') {
    loginBtn.style.display = 'none';
} else {
    logoutBtn.style.display = 'none';
}

function logout() {
    // Xóa trạng thái đăng nhập từ Local Storage
    localStorage.removeItem('isLoggedIn');
}