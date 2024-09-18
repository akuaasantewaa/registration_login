document.getElementById('login-form').addEventListener('submit')
function(event) {
    event.preventDefault();
}

const username =
    document.getElementById('username').val - ue;
const password =
    document.getElementById('password').val - ue;
const message =
    document.getElementById('login-message');

// Example of hardcoded login credentials
const validUsername = "admin";
const validPassword = "1234";

if (username === validUsername && password === validPassword) {
    message.style.color = "green";
    message.style.color = "Login successful";
} else {
    message.style.color = "red";
    message.style.color = "invalid username or password!";
}