// Lắng nghe sự kiện cuộn trang
window.addEventListener('scroll', function () {
  var backToTopBtn = document.getElementById('backToTopBtn');

  // Hiển thị nút "Back to top" khi cuộn xuống 10px
  if (window.scrollY > 10) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

// Xử lý sự kiện khi nhấp vào nút "Back to top"
document.getElementById('backToTopBtn').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Cuộn mượt đến đầu trang
  });
});
document.getElementById('aboutUs').addEventListener('click', function () {
  window.scrollTo({
    top: 99999999,
    behavior: 'smooth'
  });
});
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();
  if (scrollTop > 160) {
    $('.nav').addClass("fixed");
    $('.right').addClass("display-none");
  } else {
    $(".nav").removeClass("fixed");
    $('.right').removeClass("display-none");
  }
}) 
