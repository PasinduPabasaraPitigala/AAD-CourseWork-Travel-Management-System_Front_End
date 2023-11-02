// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("contact-form");
//     const name = document.getElementById("name");
//     const email = document.getElementById("email");
//     const subject = document.getElementById("subject");
//     const message = document.getElementById("message");
//
//     form.addEventListener("submit", function (e) {
//         e.preventDefault();
//
//         if (validateForm()) {
//             // Form data is valid; you can submit it or perform other actions here
//             alert("Your message has been submitted!");
//         }
//     });
//
//     function validateForm() {
//         if (
//             name.value.trim() === "" ||
//             email.value.trim() === "" ||
//             subject.value.trim() === "" ||
//             message.value.trim() === ""
//         ) {
//             alert("Please fill in all required fields.");
//             return false;
//         }
//         return true;
//     }
// });
