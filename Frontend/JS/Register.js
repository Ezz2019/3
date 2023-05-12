const nameField = document.getElementById("name");
const bdField = document.getElementById("BD");
const emailField = document.getElementById("mail");
const phoneField = document.getElementById("phone");
const passwordField = document.getElementById("password");
const address = document.getElementById("address");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function (event) {
    const name = nameField.value;
    const phone = phoneField.value;
    const email = emailField.value;
    const password = passwordField.value;

    let formData = new FormData();

    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("password", password);

    fetch("/api/register", {
        method: "POST",
        body: formData
    }).then((response) => {
        if (response.status == 200) {
            console.log("success");
        } else {
            console.log("Registeration failed.");
        }
    })
});