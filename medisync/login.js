document.addEventListener("DOMContentLoaded", function () {
    // Get the form and input fields
    const loginForm = document.querySelector(".sign-in-form");
    const usernameInput = document.querySelector("input[type='text']");
    const passwordInput = document.querySelector("input[type='password']");
    
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (username === "" || password === "") {
            alert("Please fill in both fields.");
            return;
        }

        // Dummy authentication (replace with actual API call)
        if (username === "Naivedya" && password === "password123") {
            alert("Login successful!");
            window.location.href = "index.html"; // Redirect to another page
        } else {
            alert("Invalid username or password.");
        }
    });
});