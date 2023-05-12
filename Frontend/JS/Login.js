const emailField = document.getElementById("mail");
const passwordField = document.getElementById("password");
const LoginButton = document.getElementById("submit-button");

LoginButton.addEventListener("click", function(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("username", emailField.value);
    formData.append("password", passwordField.value);


    fetch("/api/authenticate", {
        method: "POST",
        body: formData
    }).then((response) => response.json()).then((res) => {
        localStorage.setItem("sessionToken", res.sessionId);
    }).catch((error) => {
        console.log("login failed");
    })
})