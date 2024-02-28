import { duongDoi } from "../constant/soDuongDoi.js";
const soDuongDoi = duongDoi;

window.addEventListener('DOMContentLoaded', () => {
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    // Dùng Object.keys() để lấy danh sách các khóa từ đối tượng soDuongDoi
    Object.keys(soDuongDoi).forEach(key => {
        const index = key.split('_')[1]; // Lấy số đường đời từ khóa (ví dụ: 'so_1' -> '1')
        const button = document.getElementById(`y_nghia_duong_doi_so_${index}`);

        if (button) { // Kiểm tra nếu phần tử tồn tại
            button.addEventListener('click', function () {
                modal.show();
                document.getElementById("modal-body").innerHTML = soDuongDoi[key];
                document.getElementById("exampleModalLabel").textContent = `Ý NGHĨA SỐ ĐƯỜNG ĐỜI SỐ ${index}`;
            });
        }
    });
});

$(document).ready(function () {
    $("#close_modal").click(function () {
        $("#exampleModal").modal('hide');
    });
    document.getElementById("close_modal").addEventListener('click', function () {
        $("#exampleModal").hide();
    });
});
