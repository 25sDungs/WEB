window.onload = function () {
  const users = [
    { username: "twintower", password: "11092001" } //  tạo một account mặc định
  ];

  document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const regUsername = document.getElementById("reg-username").value;
    const regPassword = document.getElementById("reg-password").value;

    const existingUser = users.find(user => user.username === regUsername);
    if (existingUser) {
      alert("Tài khoản đã tồn tại!");
    } else {
      users.push({ username: regUsername, password: regPassword });
      alert("Đăng kí thành công! Vui lòng đăng nhập để tiếp tục");
    }

    document.getElementById("register-form").reset();
  });

  document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const loginUsername = document.getElementById("login-username").value;
    const loginPassword = document.getElementById("login-password").value;

    const user = users.find(user => user.username === loginUsername && user.password === loginPassword);
    if (user) {
      window.location.href = "../html/newsfeed.html";
    } else {
      let a = confirm("Sai tên tài khoản hoặc mật khẩu rồi!\nLấy tài khoản khách?");
      if(a){
        alert("Tên đăng nhập: twintower\nMật khẩu: 11092001\nKhông thích thì đăng kí nhé!")
      }
    }
    document.getElementById("login-form").reset();
  });
}