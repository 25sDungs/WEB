window.onload = function () {
  let nameElement = document.querySelector('.name');
  let avtElement = document.querySelector('.avt');
  let actElements = document.querySelectorAll('.active');
  let bElements = document.querySelectorAll('.menuflex');
  let menu = document.querySelector('.dropdown-menu');
  let bodyElement = document.getElementsByTagName('body')[0];
  nameElement.addEventListener('click', viewprofile);
  avtElement.addEventListener('click', viewprofile);

  $(document).ready(() => {
    $(".add-fr").click(function () {
      let $button = $(this);
      if (!$button.hasClass("invitation-sent")) {
        $button.addClass("invitation-sent");
        $button.html(`<i class="fa-solid fa-check animate__animated animate__bounceIn"></i>`);
        const $removeButton = $(this).siblings(".remove-fr");
        $removeButton.html("Hủy");
      }
    });
    $(".remove-fr").click(function () {
      const $removeButton = $(this);
      const $addButton = $removeButton.siblings(".add-fr");

      if ($removeButton.html() === "Hủy") {
        $removeButton.html("Xóa, Gỡ");
        $addButton.html("+ Thêm bạn bè");
        $addButton.removeClass("invitation-sent");
      } else {
        let a = confirm("Bạn có thật sự muốn xóa?");
        if (a) {
          $removeButton.parent().parent().parent(".user-left").remove();
        }
      }
    });
    $(".acp-fr").click(function () {
      let $button = $(this);
      if (!$button.hasClass("invitation-sent")) {
        $button.addClass("invitation-sent");
        $button.html(`<i class="fa-solid fa-check animate__animated animate__bounceIn"></i>`);
        const $removeButton = $(this).siblings(".del-fr");
        $removeButton.html("Hủy");
      }
    });
    $(".del-fr").click(function () {
      const $removeButton = $(this);
      const $addButton = $removeButton.siblings(".acp-fr");

      if ($removeButton.html() === "Hủy") {
        $removeButton.html("Xóa, Gỡ");
        $addButton.html("Chấp nhận");
        $addButton.removeClass("invitation-sent");
      } else {
        let a = confirm("Bạn có thật sự muốn xóa?");
        if (a) {
          $removeButton.parent().parent().parent(".user-top").remove();
        }
      }
    });
    $(".friend").click(() => {
      $(".sub-nof").fadeIn('fast');
    });
    // Sự kiện click bên ngoài "sub-nof"
    $(document).click((event) => {
      if (!$(event.target).closest(".sub-nof, .friend").length) {
        $(".sub-nof").fadeOut('fast');
      }
    });
    $(".nof").click(() => {
      $(".menu-nof").fadeIn('fast');
    })
    // Sự kiện click bên ngoài "menu-nof"
    $(document).click((event) => {
      if (!$(event.target).closest(".menu-nof, .nof").length) {
        $(".menu-nof").fadeOut('fast');
      }
    });
    $(".mess").click(() => {
      $(".sub-chat").fadeIn('fast');
    })
    // Sự kiện click bên ngoài "menu-nof"
    $(document).click((event) => {
      if (!$(event.target).closest(".sub-chat, .mess").length) {
        $(".sub-chat").fadeOut('fast');
      }
    });
    $(document).ready(()=>{
      $(".fa-xmark").click(()=>{
        $(".pop-up").fadeOut('fast');
      })
      $(".user-chat").click(()=>{
        $(".pop-up").show().addClass("animate__animated animate__slideInRight");
      })
    })
  });
  // Get all the elements with class "button-react like"
  let likeButtons = document.querySelectorAll('.react .button-react.like');

  // Attach the event listener to each "like" button
  likeButtons.forEach(likeButton => {
    likeButton.addEventListener('click', function () {
      // Toggle the color of the heart icon when clicking on the "like" button
      let heartIcon = likeButton.querySelector('i.fa-solid.fa-heart');
      let Numb = likeButton.querySelector('sup');
      let Drop = likeButton.querySelector('div');
      let supElement = likeButton.querySelector('.button-react.like sup');

      // Lấy số từ nội dung văn bản của thẻ <sup> và chuyển đổi thành kiểu số nguyên
      let likeCount = parseInt(supElement.textContent);
      if (heartIcon.style.color == 'red') {
        heartIcon.style.color = ''; // Remove the inline style to reset the color
        Numb.style.color = '';
        Drop.style.color = '';
        likeCount--;
      } else {
        heartIcon.style.color = 'red';
        Numb.style.color = 'red';
        Drop.style.color = 'red';
        likeCount++;
      }
      likeButton.querySelector('sup').textContent = ` ${likeCount}`;
    });
  });
  actElements.forEach(function (element) {
    element.addEventListener('click', viewprofile);
  });

  bElements.forEach(function (element) {
    element.addEventListener('click', viewprofile);
  });
  bodyElement.addEventListener('click', function (event) {
    let targetElement = event.target;

    // Kiểm tra nếu phần tử được nhấp chuột không thuộc menu, name hoặc avt
    if (!menu.contains(targetElement) && !nameElement.contains(targetElement) && !avtElement.contains(targetElement)) {
      menu.style.display = 'none'; // Ẩn menu nếu không thuộc menu, name hoặc avt và menu đang hiển thị
    }
  });
  let textarea = document.getElementById('textarea');
  let overlay = document.querySelector('.overlaybody');
  textarea.addEventListener('focus', function () {
    overlay.style.display = 'block';
    setTimeout(function () {
      overlay.classList.add('active');
    });
  });

  textarea.addEventListener('blur', function () {
    overlay.classList.remove('active');
    // Đặt lại lớp active thành không có sau khi hiệu ứng từ từ kết thúc
    setTimeout(function () {
      overlay.style.display = 'none';
      overlay.classList.remove('active');
    }, 800);
  });
};
let scrollmid = document.querySelector('.secmid');
let backToTopBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll', function () {
  var backToTopBtn = document.getElementById('backToTopBtn');

  // Hiển thị nút "Back to top" khi cuộn xuống 10px
  if (window.scrollY > 10) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});
scrollmid.addEventListener('scroll', function () {
  // Hiển thị nút "Back to top" khi phần .secmid được cuộn xuống ít nhất 10px
  if (scrollmid.scrollTop > 10) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

// Xử lý sự kiện khi nhấp vào nút "Back to top"
backToTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Cuộn mượt đến đầu trang
  })
  scrollmid.scrollTo({
    top: 0,
    behavior: 'smooth' // Cuộn mượt đến đầu trang
  });
});
// Fetch and display user information from JSON file
fetch('../json/users.json')
  .then(response => response.json())
  .then(data => {
    const userList = document.querySelector('.users-not-fr');
    data.forEach(user => {
      const userCard = document.createElement('div');
      userCard.className = 'user-left';
      userCard.innerHTML = `
      <div class="items-img"><img
      src="${user.img}"
      alt="user">
      </div>
      <div class="stranger">
        <b>${user.name}</b>
        <div class="add-remove">
          <button class="add-fr">${user.addfr}</button>
          <button class="remove-fr">${user.remove}</button>
        </div>
      </div>
    `;
      userList.appendChild(userCard);
    });
  })
  .catch(error => console.error('Error fetching user data:', error));
  fetch('../json/users-chat.json')
  .then(response => response.json())
  .then(data => {
    const userList = document.querySelector('.users-chat');
    data.forEach(user => {
      const userCard = document.createElement('div');
      userCard.className = 'user-chat';
      userCard.innerHTML = `
      <div class="items-img ${user.status}"><img
      src="${user.img}"
      alt="user">
          <${user.element} class="${user.class}">${user.content}</${user.element}>
      </div>
        <div class="name-chat">
           <b>${user.name}</b>
           <div class="title-chat">
              <p>${user.chat}</p>
              <p>${user.time}</p>
            </div>    
        </div>
    `;
      userList.appendChild(userCard);
    });
  })
  .catch(error => console.error('Error fetching user data:', error));
function viewprofile() {
  let menu = document.querySelector('.dropdown-menu');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}
fetch('../json/user-contact.json')
  .then(response => response.json())
  .then(data => {
    const userList = document.querySelector('.users');
    data.forEach(user => {
      const userCard = document.createElement('div');
      userCard.className = 'user';
      userCard.innerHTML = `
    <div class="items-img ${user.status}"><img
        src="${user.img}"
        alt="user">
      <${user.element} class="${user.class}">${user.active}</${user.element}>
    </div>
    <div class="items-name"><b>${user.name}</b></div>
    `;
      userList.appendChild(userCard);
    });
  })
  .catch(error => console.error('Error fetching user data:', error));
fetch('../json/nofication.json')
  .then(response => response.json())
  .then(data => {
    const notifList = document.querySelector(".list-nof");
    data.forEach(user => {
      const nofiCard = document.createElement('div');
      nofiCard.className = 'content-nof';
      nofiCard.innerHTML = `
       <div class="items-img"><img
          src="${user.img}"
           alt="user">
             <i class="${user.type}"></i>
        </div>
           <div class="stranger">
             <b>${user.name}</b>
               <div class="info-nof">
                 <p>${user.title}</p>
                 <p class="time">${user.time}<p>
                </div>
            </div>
      `;
      notifList.appendChild(nofiCard);
    })
  })
  .catch(error => console.error('Error fetching user data:', error));
fetch('../json/acceptfr.json')
  .then(response => response.json())
  .then(data => {
    const userList = document.querySelector('.sub-nof');
    data.forEach(user => {
      const userCard = document.createElement('div');
      userCard.className = 'user-top';
      userCard.innerHTML = `
      <div class="items-img"><img
      src="${user.img}"
      alt="user">
      </div>
      <div class="stranger">
        <b>${user.name}</b>
        <div class="add-remove">
          <button class="acp-fr">${user.addfr}</button>
          <button class="del-fr">${user.remove}</button>
        </div>
      </div>
    `;
      userList.appendChild(userCard);
    });
  })
  .catch(error => console.error('Error fetching user data:', error));
function viewprofile() {
  let menu = document.querySelector('.dropdown-menu');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}


