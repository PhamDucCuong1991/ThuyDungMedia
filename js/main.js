function functionF() {
    if (localStorage.getItem("loggedInUser") === "admin") {
        $("#s_sosumenh_2x").append("SỐ " + suMenhSlide);
        const suMenhSlide1 = "so_" + suMenhSlide;
        $("#report_sumenh_content").append(duongDoi[suMenhSlide1]);

        $("#s_sonoitam_2x").append("SỐ " + linhHonSlide);
        const linhHonSlide1 = "so_" + linhHonSlide;
        $("#report_noitam_content").append(duongDoi[linhHonSlide1]);

        $("#s_sonoicam_2x").append("SỐ " + nhanCachSlide);
        const nhanCachSlide1 = "so_" + nhanCachSlide;
        $("#report_noicam_content").append(duongDoi[nhanCachSlide1]);

        $("#s_sotuongtac_2x").append("SỐ " + soDamMeSlide);
        const soDamMeSlide1 = "so_" + soDamMeSlide;
        $("#report_tuongtac_content").append(duongDoi[soDamMeSlide1]);

        $("#s_sothaido_2x").append("SỐ " + thaiDoSlide);
        const thaiDoSlide1 = "so_" + thaiDoSlide;
        $("#report_thaido_content").append(duongDoi[thaiDoSlide1]);

        $("#s_songaysinh_2x").append("SỐ " + ngaySinh1Slide);
        const ngaySinh1Slide1 = "so_" + ngaySinh1Slide;
        $("#report_ngaysinh_contentx").append(duongDoi[ngaySinh1Slide1]);

        $("#s_sologic_2x").append("SỐ " + tuDuyLyTriSlide);
        const tuDuyLyTriSlide1 = "so_" + tuDuyLyTriSlide;
        $("#report_logic_content").append(duongDoi[tuDuyLyTriSlide1]);

        $("#s_socamxuc_2x").append("SỐ " + soCamXucSlide);
        const soCamXucSlide1 = "so_" + soCamXucSlide;
        $("#report_camxuc_contentx").append(duongDoi[soCamXucSlide1]);

        $("#s_sotrucgiac_2x").append("SỐ " + soTrucGiacSlide);
        const soTrucGiacSlide1 = "so_" + soTrucGiacSlide;
        $("#report_trucgiac_contentx").append(duongDoi[soTrucGiacSlide1]);

        $("#s_sotrainghiem_2x").append("SỐ " + soTuDuyTraiNghiemSlide);
        const soTuDuyTraiNghiemSlide1 = "so_" + soTuDuyTraiNghiemSlide;
        $("#report_trainghiem_contentx").append(duongDoi[soTuDuyTraiNghiemSlide1]);

        $("#s_sobosung_2x").append("SỐ " + soThieuSlide);
        const soThieuSlide1 = "so_" + soThieuSlide;
        $("#report_bosung_contentx").append(duongDoi[soThieuSlide1]);

        $("#s_sonttt_2").append("SỐ " + soKetNoiLinhHonSlide);
        const soKetNoiLinhHonSlide1 = "so_" + soKetNoiLinhHonSlide;
        $("#report_nttt_contentx").append(duongDoi[soKetNoiLinhHonSlide1]);

        $("#s_soddsm_2").append("SỐ " + ketNoiVanMenhSlide);
        const ketNoiVanMenhSlide1 = "so_" + ketNoiVanMenhSlide;
        $("#report_ddsm_contentx").append(duongDoi[ketNoiVanMenhSlide1]);

        $("#s_socanbang_2x").append("SỐ " + canBangSlide);
        const canBangSlide1 = "so_" + canBangSlide;
        $("#report_canbang_contentx").append(duongDoi[canBangSlide1]);

        $("#s_sotruongthanh_2x").append("SỐ " + truongThanhSlide);
        const truongThanhSlide1 = "so_" + truongThanhSlide;
        $("#report_truongthanh_contentx").append(duongDoi[truongThanhSlide1]);

        $("#s_sonamsinh_2").append("SỐ " + namCaNhanSlide);
        const namCaNhanSlide1 = "so_" + namCaNhanSlide;
        $("#report_namsinh_contentx").append(duongDoi[namCaNhanSlide1]);

        $("#s_thangcanhan_2x").append("SỐ " + thangCaNhanSlide);
        const thangCaNhanSlide1 = "so_" + thangCaNhanSlide;
        $("#report_thangcanhan_contentx").append(duongDoi[thangCaNhanSlide1]);

        $("#s_vanMenh_2").append("SỐ " + vanMenhSlide);
        const vanMenhSlide1 = "so_" + vanMenhSlide;
        $("#report_vanMenh_contentx").append(duongDoi[vanMenhSlide1]);

        $("#s_smtt_2").append("SỐ " + sucManhTiemThucSlide);
        const sucManhTiemThucSlide1 = "so_" + sucManhTiemThucSlide;
        $("#report_smtt_contentx").append(duongDoi[sucManhTiemThucSlide1]);
    }

}

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
        location.href = "../HTML/traCuu.html";
        $('#tm-hello').append(' ' + '(Chào sếp Dung!)');
        $('#idLogin').text('Logout');
        $('#link-than-so').text('Logout');
        if (isClicked) {
            setTimeout(() => {
                localStorage.clear();
                $('#idLogin').text('Login');
            }, 365* 24 * 60 * 60 * 1000)
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

$('#idLogin').on('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
    if (isLoggedIn) {
        logout();
    }
});


$('#tinhToanSo').on('click', function () {
  tinhToanSo()
});

$('#link-than-so').on('click', function () {
    logout();
    $("#mynavbar button").hide()
});
$(document).ready(function() {
    if (localStorage.getItem("loggedInUser") === "admin") {
        $("#mynavbar button").show();
    }else {
        $("#mynavbar button").hide()
    }
});

