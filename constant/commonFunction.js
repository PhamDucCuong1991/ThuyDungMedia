export function removeAccent(string) {
    string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    string = string.replace(/Đ/g, "D").replace(/đ/g, "d");
    return string;
}