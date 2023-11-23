// LOGIN
var loginBtn = document.getElementById('login-btn');
var logoutBtn = document.getElementById('logout-btn');

if (localStorage.getItem('isLoggedIn') === 'true') {
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'block';
} else {
    loginBtn.style.display = 'block';
    logoutBtn.style.display = 'none';
}

function logout() {
    // Xóa trạng thái đăng nhập từ Local Storage
    localStorage.removeItem('isLoggedIn');
}
// SLIDER
let list = document.querySelector('.slider .list-slide');
let slides = document.querySelectorAll('.slider .list-slide .slide');
let dots = document.querySelectorAll('.slider .slide-dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthSlides = slides.length - 1;

next.onclick = function () {
    if (active + 1 > lengthSlides) {
        active = 0;
    }
    else {
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthSlides;
    }
    else {
        active = active - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(() => { next.click() }, 5000);
function reloadSlider() {
    let checkLeft = slides[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .slide-dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);

    refreshSlider = setInterval(() => { next.click() }, 5000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlider();
    })
})

// INTRODUCE
var introLink = document.querySelector('a[href="intro"]');
var about = document.getElementById('about');

// Thêm sự kiện click vào liên kết giới thiệu
introLink.addEventListener('click', function (e) {
    e.preventDefault();  // Ngăn chặn chuyển hướng đến "/intro"

    // Lấy vị trí hiện tại của phần "about"
    var aboutOffsetTop = about.offsetTop;

    // Lấy chiều cao của màn hình
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Tính toán vị trí cuộn mới
    var scrollTo = aboutOffsetTop - (windowHeight / 2);

    // Cuộn trang web đến vị trí mới
    window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
    });
});

// FOOTER
var contactLink = document.querySelector('a[href="contact"]');
var footer = document.getElementById('footer');

// Thêm sự kiện click vào liên hệ
contactLink.addEventListener('click', function (e) {
    e.preventDefault();  // Ngăn chặn chuyển hướng đến "/contact"

    // Cuộn trang web đến phần footer
    footer.scrollIntoView({
        behavior: 'smooth'
    });
});