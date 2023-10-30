function tinhToanSo() {
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const ten = removeAccent(document.getElementById("fullName").value.trim().toUpperCase());
    console.log(str,ten)
    let ngaySinh = document.getElementById("birthDay").value.trim();
    if (tachNgayThangNamTuChuoi(ngaySinh) === "") {
        alert("Định dạng ngày sinh không hợp lệ");
        return
    }

    let arrNa = [];
    let arrPa = [];
    let daySoCamXuc = [];
    let daySoTrucGiac = [];
    const arrNgaySinh = extractNumbers(ngaySinh);
    const arr = convertNameToNumbers(ten, str);

    nguyenPhuAm(ten); // Lấy ra mảng nguyên âm và phụ âm
    getDaySoCamXuc(ten); //Lấy ra mảng chữ số cảm xúc trong tên
    getDaySoTrucGiac(ten);  // Lấy ra mảng chữ số trực giác trong tên

    document.getElementById("duongDoi").innerHTML += getSum(arrNgaySinh);
    document.getElementById("suMenh").innerHTML += getSum(arr);
    document.getElementById("linhHon").innerHTML += getSum(arrNa);
    document.getElementById("nhanCach").innerHTML += getSum(arrPa);
    document.getElementById("canBang").innerHTML += getSum(convertNameToNumbers(getInitials(ten), str));
    document.getElementById("truongThanh").innerHTML += getSum([getSum(arrNgaySinh), getSum(arr)]);
    document.getElementById("ngaySinh").innerHTML += getBirthDayNumber(arrNgaySinh);
    document.getElementById("thaiDo").innerHTML += getAttitudeNumber(arrNgaySinh);
    document.getElementById("tuDuyLyTri").innerHTML += getBirthDayNumber(arrNgaySinh) + getDestinyNumber(getLastWordNumbers(ten, str));
    document.getElementById("vanMenh").innerHTML += getDestinyNumber(getLastWordNumbers(ten, str));
    document.getElementById("soThieu").innerHTML += getMissingNumbers(arr);
    document.getElementById("sucManhTiemThuc").innerHTML += (9 - getMissingNumbers(arr).length);
    document.getElementById("soCamXuc").innerHTML += getSum(daySoCamXuc);
    document.getElementById("soTrucGiac").innerHTML += getSum(daySoTrucGiac);
    document.getElementById("namCaNhan").innerHTML += namCaNhanHienTai();
    document.getElementById("thangCaNhan").innerHTML += thangCaNhan(namCaNhanHienTai());
    document.getElementById("ketNoiVanMenh").innerHTML += (Math.abs(getSum(arrNgaySinh) - getSum(arr))) % 9 || 9;
    document.getElementById("soDamMe").innerHTML += getDaySoDamMe(arr);
    document.getElementById("soKetNoiLinhHon").innerHTML += soKetNoiLinhHon(arrPa, arrPa);
    document.getElementById("soTuDuyTraiNghiem").innerHTML += getSoTuDuyTraiNghiem(ten);

    // this.dinhCao.dinhCao1 = getSum(arrNgaySinh.slice(0, arrNgaySinh.length - 4));
    // this.dinhCao.dinhCao2 = getSoDinhCao2(arrNgaySinh);
    // this.dinhCao.dinhCao3 = (this.dinhCao.dinhCao1 + this.dinhCao.dinhCao2) % 9 || 9;
    // this.dinhCao.dinhCao4 = getSum(arrNgaySinh.slice(2, arrNgaySinh.length));
    //
    // this.thachThuc.thachThuc1 = (Math.abs(tachNgayThangNamTuChuoi(ngaySinh).ngay_sinh - tachNgayThangNamTuChuoi(ngaySinh).thang_sinh)) % 9 || 9;
    // this.thachThuc.thachThuc2 = (Math.abs(tachNgayThangNamTuChuoi(ngaySinh).ngay_sinh - tachNgayThangNamTuChuoi(ngaySinh).nam_sinh)) % 9 || 9;
    // this.thachThuc.thachThuc3 = (Math.abs(this.thachThuc.thachThuc1 - this.thachThuc.thachThuc2)) % 9 || 9;
    // this.thachThuc.thachThuc4 = (Math.abs(tachNgayThangNamTuChuoi(ngaySinh).thang_sinh - tachNgayThangNamTuChuoi(ngaySinh).nam_sinh)) % 9 || 9;

    function extractNumbers(value) {
        return (value.match(/[0-9]/g) || []).map(Number);
    }

    function convertNameToNumbers(name) {
        return [...name].filter(c => c !== ' ').map(c => (str.indexOf(c) % 9) + 1);
    }

    function getMissingNumbers(arr) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(n => !arr.includes(n));
    }

    // Lay chữ cái đầu trong họ và tên
    function getInitials(name) {
        return name.split(' ').map(word => word[0]).join('');
    }

    // Chữ số trong tên
    function getLastWordNumbers(name, str) {
        const lastWord = name.split(' ').pop();
        return convertNameToNumbers(lastWord, str).filter(n => n !== 0);
    }


    function getSumOnly(arr) {
        return arr.reduce((acc, curr) => (acc + curr) % 9, 0) || 9;
    }

    function getSum(arr) {
        const sum = arr.reduce((acc, curr) => acc + curr, 0);
        if (sum === 11 || sum === 22 || sum === 33) return sum;
        return (sum % 9) || 9;
    }

    function getBirthDayNumber(arr) {
        return (arr[0] + arr[1]) % 9 || 9;
    }

    function getAttitudeNumber(arr) {
        return getSum(arr.slice(0, arr.length - 4));
    }

    function getDestinyNumber(arr) {
        return getSum(arr);
    }

    function nguyenPhuAm(name) {
        const abc = name.replace(/\s/g, '');
        for (let i = 0; i < abc.length; i++) {
            if (abc[i] === "A" || abc[i] === "E" || abc[i] === "I" || abc[i] === "O" || abc[i] === "U") {
                arrNa.push(str.indexOf(abc[i]) % 9 + 1);
            } else {
                arrPa.push(str.indexOf(abc[i]) % 9 + 1);
            }
        }
    }

    function getDaySoCamXuc(name) {
        const abc = name.replace(/\s/g, '');
        for (let i = 0; i < abc.length; i++) {
            if (abc[i] === "I" || abc[i] === "O" || abc[i] === "R" || abc[i] === "Z" || abc[i] === "B" || abc[i] === "S" || abc[i] === "T" || abc[i] === "X") {
                daySoCamXuc.push(str.indexOf(abc[i]) % 9 + 1);
            }
        }
    }

    function getDaySoTrucGiac(name) {
        const abc = name.replace(/\s/g, '');
        for (let i = 0; i < abc.length; i++) {
            if (abc[i] === "K" || abc[i] === "F" || abc[i] === "Q" || abc[i] === "U" || abc[i] === "Y" || abc[i] === "C" || abc[i] === "V") {
                daySoTrucGiac.push(str.indexOf(abc[i]) % 9 + 1);
            }
        }
    }

    function getSoTuDuyTraiNghiem(name) {
        const abc = name.replace(/\s/g, '');
        let soTuDuyTraiNghiem = [];
        for (let i = 0; i < abc.length; i++) {
            if (abc[i] === "E" || abc[i] === "W" || abc[i] === "D" || abc[i] === "M") {
                soTuDuyTraiNghiem.push(str.indexOf(abc[i]) % 9 + 1);
            }
        }
        if (soTuDuyTraiNghiem.length === 0) {
            return 1;
        }
        return getSum(soTuDuyTraiNghiem);
    }

    function namCaNhanHienTai() {
        let currentDate = new Date();
        let dateString = currentDate.toISOString().slice(0, 10);
        let characters = dateString.replace(/-/g, '').split('');
        const a = characters.map(char => parseInt(char));
        return getSumOnly(a)
    }

    function thangCaNhan(namCaNhan) {
        let currentDate = new Date();
        let month = currentDate.getMonth() + 1; // Lưu ý: tháng trong JS bắt đầu từ 0
        const monthChars = month.toString().split('');
        const sumOfMonthChars = monthChars.map(char => parseInt(char)).reduce((acc, val) => acc + val, 0);
        return (sumOfMonthChars + namCaNhan) % 9 || 9;
    }


    function getDaySoDamMe(arr) {
        let numCount = {}; // Đếm số lần xuất hiện của từng số
        let maxCount = 0; // Số lần xuất hiện nhiều nhất
        let mostFrequentNumbers = []; // Mảng chứa các số lặp lại nhiều nhất
        for (let num of arr) {
            if (numCount[num]) {
                numCount[num]++;
            } else {
                numCount[num] = 1;
            }
            maxCount = Math.max(maxCount, numCount[num]);
        }

        for (let num in numCount) {
            if (numCount[num] === maxCount) {
                mostFrequentNumbers.push(Number(num)); // Chuyển số về kiểu number (nếu cần)
            }
        }

        return mostFrequentNumbers;
    }

    function soKetNoiLinhHon(arrNguyenAm, arrPhuAm) {
        return (Math.abs(getSum(arrNguyenAm) - getSum(arrPhuAm))) % 9 || 9;
    }

    function getSoDinhCao2(arr) {
        let phanDau = arr.slice(0, 2); // Lấy phần tử từ đầu đến vị trí thứ 1 và 2
        let phanCuoi = arr.slice(4);   // Lấy phần tử từ vị trí thứ 4 trở đi
        // Nối hai phần lại thành một mảng mới
        let ketQua = phanDau.concat(phanCuoi);
        return getSum(ketQua)
    }

    function tachNgayThangNamTuChuoi(ngaySinh) {
        const regexPatterns = [
            /\d{2}\/\d{2}\/\d{4}/, // DD/MM/YYYY
            /\d{2}-\d{2}-\d{4}/, // DD-MM-YYYY
            /\d{2}\*\d{2}\*\d{4}/ // DD*MM*YYYY (ví dụ)
        ];
        let ketQua = "";
        // Lặp qua từng biểu thức chính quy để kiểm tra định dạng
        for (const pattern of regexPatterns) {
            const matches = ngaySinh.match(pattern);
            if (matches) {
                ketQua = matches[0];
                break; // Dừng khi tìm thấy định dạng hợp lệ đầu tiên
            }
        }
        if (ketQua) {
            // Tách ngày, tháng và năm từ chuỗi kết quả
            const parts = ketQua.split(/\/|-|\*/); // Phân tách bằng /, - hoặc *
            if (parts.length === 3) {
                return {
                    ngay_sinh: parseInt(parts[0]),
                    thang_sinh: parseInt(parts[1]),
                    nam_sinh: parseInt(parts[2])
                };
            }
        } else {
            return "";
        }
    }

    function removeAccent(string) {
        string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        string = string.replace(/Đ/g, "D").replace(/đ/g, "d");
        return string;
    }

}

function xoaDuLieu() {
    location.reload()
}