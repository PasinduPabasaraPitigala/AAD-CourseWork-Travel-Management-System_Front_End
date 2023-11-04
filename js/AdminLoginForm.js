function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Check if username and password are correct (replace these with your actual admin credentials)
    var adminUsername = "guide";
    var adminPassword = "guide123";

    if (username === adminUsername && password === adminPassword) {
        // Redirect to the admin panel or any other admin-related page
        window.location.href = "../html/GuideForm.html";
    } else {
        // Display an error message for invalid login attempts
        errorMessage.textContent = "Invalid username or password. Please try again.";
        errorMessage.style.color = "red";
        // Clear the password field
        document.getElementById("password").value = "";
    }

    var adminUsernametwo = "hotel";
    var adminPasswordtwo = "hotel123";

    if (username === adminUsernametwo && password === adminPasswordtwo) {
        // Redirect to the admin panel or any other admin-related page
        window.location.href = "../html/HotelMainForm.html";
    } else {
        // Display an error message for invalid login attempts
        errorMessage.textContent = "Invalid username or password. Please try again.";
        errorMessage.style.color = "red";
        // Clear the password field
        document.getElementById("password").value = "";
    }

    var adminUsernamethree = "package";
    var adminPasswordthree = "package123";

    if (username === adminUsernamethree && password === adminPasswordthree) {
        // Redirect to the admin panel or any other admin-related page
        window.location.href = "../html/PackageMainForm.html";
    } else {
        // Display an error message for invalid login attempts
        errorMessage.textContent = "Invalid username or password. Please try again.";
        errorMessage.style.color = "red";
        // Clear the password field
        document.getElementById("password").value = "";
    }

    var adminUsernamefour = "vehicle";
    var adminPasswordfour = "vehicle123";

    if (username === adminUsernamethree && password === adminPasswordthree) {
        // Redirect to the admin panel or any other admin-related page
        window.location.href = "../Vehicle/VehicleDashBoard.html";
    } else {
        // Display an error message for invalid login attempts
        errorMessage.textContent = "Invalid username or password. Please try again.";
        errorMessage.style.color = "red";
        // Clear the password field
        document.getElementById("password").value = "";
    }
}