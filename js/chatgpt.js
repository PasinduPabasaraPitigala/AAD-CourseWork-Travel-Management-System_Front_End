const form = document.getElementById("login-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Replace with your authentication logic
    if (username === "your_username" && password === "your_password") {
        alert("Login successful!");
        // You can redirect the user or perform other actions here
    } else {
        alert("Invalid username or password. Please try again.");
    }
});