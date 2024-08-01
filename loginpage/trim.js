document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Simulated user data
    var users = {
        "user1": "password1",
        "user2": "password2"
    };

    if (users[username] && users[username] === password) {
        alert("Login successful! Welcome, " + username);
    } else {
        errorMessage.textContent = "Invalid username or password";
    }
});