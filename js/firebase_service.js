let firebaseConfig = {
    apiKey: "AIzaSyAdic5sIMHiiw47CVvErovovu0EWfgc7A4",
    authDomain: "thuydungmedia-1efed.firebaseapp.com",
    projectId: "thuydungmedia-1efed",
    storageBucket: "thuydungmedia-1efed.appspot.com",
    messagingSenderId: "1094519862100",
    appId: "1:1094519862100:web:cf24b42535b1f43c6f0ec1",
    measurementId: "G-G30MG7Q8XL"
};
// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);

$(document).ready(function() {
    $('#myForm2').on('submit', function(e) {
        e.preventDefault();

        let inputData = $('#message').val();
        // Lấy tham chiếu đến Firestore
        let db = firebase.firestore();

        // Thêm dữ liệu vào collection 'formData'
        db.collection("formData").add({
            data: inputData
        })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    });

});