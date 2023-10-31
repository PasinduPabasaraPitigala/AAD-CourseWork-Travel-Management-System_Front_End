const form = document.getElementById("payment-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const cardNumber = document.getElementById("cardNumber").value;
    const cardHolder = document.getElementById("cardHolder").value;
    const expirationMM = document.getElementById("expirationMM").value;
    const expirationYY = document.getElementById("expirationYY").value;
    const cvv = document.getElementById("cvv").value;
    const date = document.getElementById("date").value;
    const userId = document.getElementById("userId").value;
    const packageDetails = document.getElementById("packageDetails").value;
    const amount = document.getElementById("amount").value;

    // You can handle the form data here, e.g., send it to a server or perform other actions
    console.log("Card Number: " + cardNumber);
    console.log("Card Holder: " + cardHolder);
    console.log("Expiration MM: " + expirationMM);
    console.log("Expiration YY: " + expirationYY);
    console.log("CVV: " + cvv);
    console.log("Date: " + date);
    console.log("User ID: " + userId);
    console.log("Package Details: " + packageDetails);
    console.log("Amount: " + amount);
});
