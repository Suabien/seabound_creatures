//FOOTER
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