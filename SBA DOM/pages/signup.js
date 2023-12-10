const navbar = document.getElementById("nav-id");
const links = document.querySelectorAll("a");
let eventLink;
let availH = window.screen.availHeight;
let availW = window.screen.availWidth;

//iterate over a collection of elements
links.forEach((link, i) => {
  if (i === 0) {
    link.setAttribute("href", "../index.html");
  } else if (i === 1) {
    link.setAttribute("href", "signup.html");
  } else if (i === 2) {
    link.setAttribute("href", "#contact");
    eventLink = link;
  }
});

//using BOM to open my linkedIn page
eventLink.addEventListener("click", () => {
  window.open(
    "https://www.linkedin.com/in/patriciamariamrsn/",
    "linkedIn",
    `width=${availW * 0.75}, height=${availH * 0.75}, left=${
      availW * 0.125
    }, top=${availH * 0.125}, resizable=yes, scrollbars=yes, location=yes`
  );
  window.focus();
});

// form validation

const form = document.getElementById("registration");
const userName = document.getElementById("username");
const passwordCheck = document.getElementById("passwordCheck");
const password = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  const userNameValue = validateUserName();
  if (userNameValue === false) {
    event.preventDefault();
    return false;
  }

  const passwordCheckValue = validatePasswordCheck();
  if(passwordCheckValue === false) {
    event.preventDefault();
    return false;
  }
  return true;
}

function validateUserName() {
  if (userName.value === "") {
    errorMsg.style.display = "block";
    errorMsg.textContent = "User name cannot be empty!";
    return false;
  } else {
    errorMsg.style.display = "none";
  }
  return userName.value;
}

function validatePasswordCheck() {
  if (passwordCheck.value !== password.value) {
    errorMsg.style.display = "block";
    errorMsg.textContent = "The password must be the same!";
    return false;
  } else {
    errorMsg.style.display = "none";
  }
  return passwordCheck.value
}
