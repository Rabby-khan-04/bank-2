document.querySelector("#submit-btn").addEventListener("click", () => {
  const emailField = document.querySelector("#user-mail-field");
  const userMail = emailField.value;

  const passField = document.querySelector("#user-pass-field");
  const userPass = passField.value;

  if (userMail == "ajrabbyk72@gmail.com" && userPass == "Rabby12345") {
    location.href = "./dashboard.html";
    emailField.value = "";
    passField.value = "";
  } else {
    alert("Enter A Valid Credential");
  }
});
