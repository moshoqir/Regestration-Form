// JavaScript to toggle password visibility
const togglePassword = document.getElementById("toggle-password");
const passwordInput = document.getElementById("password");
const eyeIcon = document.getElementById("eye-icon");

togglePassword.addEventListener("click", function () {
  // Toggle the input type between 'password' and 'text'
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;

  // Toggle the eye icon
  eyeIcon.classList.toggle("fa-eye-slash");
});

//adding email to sessionStorage
let emailInput = document.getElementById("email");
document.getElementById("email").onblur = function () {
  window.sessionStorage.setItem("email", this.value);
};

if (window.sessionStorage.getItem("email")) {
  emailInput.value = window.sessionStorage.getItem("email");
}

//adding mobile to sessionStorage

let mobileInput = document.getElementById("mobile");

mobileInput.onblur = function () {
  window.sessionStorage.setItem("mobile", this.value);
};

if (window.sessionStorage.getItem("mobile")) {
  mobileInput.value = window.sessionStorage.getItem("mobile");
}

//adding terms and conditions to sessionStorage

let agreeCheck = document.getElementById("flexCheckDefault");

if (window.sessionStorage.getItem("agree")) {
  agreeCheck.checked = true;
}

agreeCheck.addEventListener("change", function () {
  if (agreeCheck.checked) {
    window.sessionStorage.setItem("agree", "true");
  } else {
    window.sessionStorage.removeItem("agree");
  }
});

//form
document.getElementById("formInput").onsubmit = function () {
  //regEx for email

  let emailValue = emailInput.value;
  let emailRe = /\w+@\w+.\w+/gi;

  let valid = emailRe.test(emailValue);

  console.log(valid);

  //regEx for mobile
  let mobileValue = document.getElementById("mobile").value;
  let mobileRe = /^0(77|79|78)\d{7}/gi;

  let validMob = mobileRe.test(mobileValue);

  console.log(validMob);

  //regEx for password

  let passValue = document.getElementById("password").value;
  let passRe = /^.{6,18}$/i;

  let validPass = passRe.test(passValue);

  console.log(validPass);

  if (valid === true && validMob === true && validPass === true) {
    return true;
  }

  let invalidData = (document.getElementById("txtInvalid").innerHTML =
    "Invalid Data!");

  return false;
};
