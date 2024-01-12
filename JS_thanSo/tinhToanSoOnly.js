function tinhToanSo(){
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let ten = removeAccent(document.getElementById("fullName").value.trim().toUpperCase());
    let ngaySinh = document.getElementById("birthDay").value.trim();
    if (ngaySinh.length !== 10) {
        alert("Ngày sinh không hợp lệ!")
        return
    }

    let arrNa = [];
    let arrPa = [];
    let daySoCamXuc = [];
    let daySoTrucGiac = [];
    const arrNgaySinh = extractNumbers(ngaySinh);
    const arr = convertNameToNumbers(ten, str);
    const so_ngaySinh = getSumOnly([arrNgaySinh[0], arrNgaySinh[1]]);
    const so_thangSinh = getSumOnly([arrNgaySinh[2], arrNgaySinh[3]]);
    const so_namSinh = getSumOnly([arrNgaySinh[4], arrNgaySinh[5], arrNgaySinh[6], arrNgaySinh[7]]);

    nguyenPhuAm(ten); // Lấy ra mảng nguyên âm và phụ âm
    getDaySoCamXuc(ten); //Lấy ra mảng chữ số cảm xúc trong tên
    getDaySoTrucGiac(ten);  // Lấy ra mảng chữ số trực giác trong tên

    $("#duongDoi").text(getSum(arrNgaySinh));
    $("#suMenh").text(getSum(arr));
    $("#linhHon").text(getSum(arrNa));
    $("#nhanCach").text(getSum(arrPa));
    $("#canBang").text(getSumOnly(convertNameToNumbers(getInitials(ten), str)));
    $("#truongThanh").text(getSum([...arrNgaySinh, ...arr]));
    $("#ngaySinh").text(getBirthDayNumber(arrNgaySinh));
    $("#thaiDo").text(getAttitudeNumber(arrNgaySinh));
    $("#tuDuyLyTri").text((getBirthDayNumber(arrNgaySinh) + getDestinyNumber(getLastWordNumbers(ten, str))) % 9 || 9);
    $("#vanMenh").text(getDestinyNumber(getLastWordNumbers(ten, str)));
    $("#soThieu").text(getMissingNumbers(arr));
    $("#sucManhTiemThuc").text(9 - getMissingNumbers(arr).length);
    $("#soCamXuc").text(getSumOnly(daySoCamXuc));
    $("#soTrucGiac").text(getSumOnly(daySoTrucGiac));
    $("#namCaNhan").text(namCaNhanHienTai());
    $("#thangCaNhan").text(thangCaNhan(namCaNhanHienTai()));
    $("#ketNoiVanMenh").text((Math.abs(getSum(arrNgaySinh) - getSum(arr))) % 9 || 9);
    $("#soDamMe").text(getDaySoDamMe(arr));
    $("#soKetNoiLinhHon").text((Math.abs(getSum(arrNgaySinh) - getSum(arrNa))) % 9 || 9);
    $("#soTuDuyTraiNghiem").text(getSoTuDuyTraiNghiem(ten));


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
        return getSumOnly(arr.slice(0, arr.length - 4));
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

    function layNamHienTai() {
        let currentDate = new Date();
        return currentDate.getFullYear() % 9 || 9;
    }

    function namCaNhanHienTai() {
        return getSumOnly([so_ngaySinh + so_thangSinh, layNamHienTai()])
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

    function removeAccent(string) {
        string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        string = string.replace(/Đ/g, "D").replace(/đ/g, "d");
        return string;
    }
}