
(function(){
    emailjs.init('1V9T4-qf9_UuloVJF');
})();
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Tên dịch vụ, template ID và thông tin từ form
    emailjs.sendForm('service_73uhzrk', 'template_bbb85nh', '#myForm')
        .then(function(response) {
            console.log('Email đã được gửi!', response.status, response.text);
            alert("Bạn đã gửi mail thành công, hãy đợi Thùy Dung phản hồi nhé!");
        }, function(error) {
            console.log('Có lỗi xảy ra...', error);
        }).finally(()=>{
        document.getElementById('myForm').reset();
    })
});
