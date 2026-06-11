const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("btn-button");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = login.username.value;
    const password = login.password.value;

    if (username === "1234" && password === "5555") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})