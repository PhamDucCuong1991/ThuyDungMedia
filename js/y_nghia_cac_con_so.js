import { duongDoi } from "../constant/soDuongDoi.js";
const soDuongDoi = {
    so_1: duongDoi.so_1,
    so_2: duongDoi.so_2,
    so_3: duongDoi.so_3,
    so_4: duongDoi.so_4,
    so_5: duongDoi.so_5,
    so_6: duongDoi.so_6,
    so_7: duongDoi.so_7,
    so_8: duongDoi.so_8,
    so_9: duongDoi.so_9,
    so_11: duongDoi.so_11,
    so_22: duongDoi.so_22,
    so_33: duongDoi.so_33,
};

window.addEventListener('DOMContentLoaded', () => {
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    // Dùng Object.keys() để lấy danh sách các khóa từ đối tượng soDuongDoi
    Object.keys(soDuongDoi).forEach(key => {
        const index = key.split('_')[1]; // Lấy số đường đời từ khóa (ví dụ: 'so_1' -> '1')
        const button = document.getElementById(`y_nghia_duong_doi_${index}`);

        if (button) { // Kiểm tra nếu phần tử tồn tại
            button.addEventListener('click', function () {
                modal.show();
                document.getElementById("modal-body").textContent = soDuongDoi[key];
                document.getElementById("exampleModalLabel").textContent = `Ý NGHĨA SỐ ĐƯỜNG ĐỜI ${index}`;
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
