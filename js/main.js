
let isClicked = false; // Khởi tạo biến trạng thái ban đầu là false

const checkbox = $("#remember-me");
checkbox.on("click", function () {
    isClicked = !isClicked;
});

let isLoggedIn = false;

function login() {
    isLoggedIn = true;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const a = $('#remember-me');

    if (username === "admin" && password === "12345") {
        localStorage.setItem("loggedInUser", username);
        alert("Đăng nhập thành công!");
        // location.href = "../HTML/traCuu.html";
        $('#tm-hello').append(' ' + '(Chào sếp Dung!)');
        $('#idLogin').text('Logout');
        $('#link-than-so').text('Logout');
        if (isClicked) {
            setTimeout(() => {
                localStorage.clear();
                $('#idLogin').text('Login');
            }, 365 * 24 * 60 * 60 * 1000)
        } else {
            setTimeout(() => {
                localStorage.clear();
                $('#idLogin').text('Login');
            }, 24 * 60 * 60 * 1000)
        }

    } else {
        alert("Tài khoản hoặc mật khẩu không chính xác!");
    }
    $("#username").val("");
    $("#password").val("");
    a.prop('checked', false);
}

// Hàm xử lý khi đăng xuất
function logout() {
  let a =  window.confirm("Bạn chắc chắn muốn đăng xuất?")
    if(!a){
        return
    }
    isLoggedIn = false;
    $('#idLogin').text('Login');
    $('#tm-hello').empty()
    localStorage.clear();
    alert("Bạn đã đăng xuất khỏi hệ thống!")
}

$("#idLogin").on('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
    if (isLoggedIn) {
        logout();
        $("#pdf-content-wrapper").hide();
    }
});


$('#tinhToanSo').on('click', function () {
  tinhToanSo()
});
$('#submit-form').on('click', function () {
    tinhToanSo()
});
$("#birthDay,#fullName").on('keypress', function (e) {
    if (e.which == 13) {
        tinhToanSo();
    }
});
$("#reset-form").on('click', function () {
    $("#fullName").val("");
    $("#birthDay").val("");
});

$("#link-than-so").on('click', function () {
    logout();
    $("#mynavbar button").hide()
});


