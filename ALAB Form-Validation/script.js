// Registration form
// extract the inputs

const form = document.getElementById("registration");
const userName = form.elements["username"];
const email = form.elements["email"];
const password = form.elements["password"];
const passwordCheck = form.elements["passwordCheck"];
const terms = form.elements["terms"];
const errMsg = document.getElementById("errorDisplay");

// addEventListener on the form
form.addEventListener("submit", validate);

// the main function
function validate(event) {
  const userNameVal = userNameValid();
  if (userNameVal === false) {
    event.preventDefault();
    return false;
  }

  const emailVal = emailValid();
  if (emailVal === false) {
    event.preventDefault();
    return false;
  }
  const passwordVal = passwordValid();
  if (passwordVal === false) {
    event.preventDefault();
    return false;
  }
  const passwordValCheck = passwordMatch();
  if (passwordValCheck === false) {
    event.preventDefault();
    return false;
  }

  const termsVal = termsValid();
  if (termsVal === false) {
    event.preventDefault();
    return false;
  }

  return true;
}

// function to validate the userName
function userNameValid() {
  if (userName.value === "") {
    errMsg.style.display = "block";
    errMsg.innerHTML = "The username cannot be blank!";
    userName.focus();
    console.log("Error: The username cannot be blank!");
    return false;
  } else {
    errMsg.style.display = "none";
  }

  if (userName.value.length < 4) {
    errMsg.style.display = "block";
    errMsg.innerHTML = "The username must be at least four characters long!";
    userName.focus();
    return false;
  } else {
    errMsg.style.display = "none";
  }

  const uniqueChar = new Set(userName.value);
  if (uniqueChar.size < 2) {
    errMsg.style.display = "block";
    errMsg.innerHTML =
      "he username must contain at least two unique characters!";
    userName.focus();
    return false;
  } else {
    errMsg.style.display = "none";
  }

  return userName.value;
}

// function to validate the email
function emailValid() {
  const regexValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.value.match(regexValidEmail)) {
    errMsg.style.display = "block";
    errMsg.innerHTML = "The email must be a valid email address!";
    email.focus();
    return false;
  } else {
    errMsg.style.display = "none";
  }

  return email.value;
}

// function to validate the password
function passwordValid() {
  const regexValidPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{12,}$/;
  if (!password.value.match(regexValidPassword)) {
    errMsg.style.display = "block";
    errMsg.innerHTML =
      "The password must contain: 12 characters, one uppercase and one lowercase letter, at least one number, at least one special character!";
    password.focus();
    return false;
  } else {
    errMsg.style.display = "none";
  }
}

function passwordMatch() {
  if (password.value !== passwordCheck.value) {
    errMsg.style.display = "block";
    errMsg.innerHTML = "Both password must match";
    passwordCheck.focus();
    return false;
  } else {
    errMsg.style.display = "none";
  }
  return passwordCheck.value;
}

function termsValid() {
  if (!terms.checked) {
    errMsg.style.display = "block";
    errMsg.innerHTML = "The terms and conditions must be accepted";
    terms.focus();
    return false;
  } else {
    errMsg.style.display = "none";
    return true;
  }
}

// this part is for Registration password - after I added the function termsValid, this part didn't work

//   const wordPassword = password;
//   const containsPassword = password.value
//     .toLowerCase()
//     .includes(wordPassword.value.toLowerCase());
//   const containsUserName = password.value
//     .toLowerCase()
//     .includes(userName.value.toLowerCase());
//   if (containsPassword || containsUserName) {
//     console.log("password same");
//     errMsg.style.display = "block";
//     errMsg.innerHTML =
//       "Password cannot contain the username or the the word password!";
//     password.focus();
//     return false;
//   } else {
//     errMsg.style.display = "none";
//   }

//   return password.value;

// Login form

const formLogin = document.getElementById("login")
const userNameLogin = formLogin.elements["username"];
const passwordLogin = formLogin.elements["password"];


formLogin.addEventListener("submit", validateLogin);

function validateLogin(event){
    event.preventDefault();
    
    const userNameLogin = loginUserName();
    if(userNameLogin === false){
        event.preventDefault();
        return false
    }

    const passwordLogin = passwordUserName();
    if(passwordLogin === false){
        event.preventDefault();
        return false
    }
    return true;
};


function loginUserName(){
    if (userNameLogin.value === "") {
        errMsg.style.display = "block";
        errMsg.innerHTML = "The username cannot be blank!";
        userNameLogin.focus();
        console.log("Error: The username cannot be blank!");
        return false;
      } else {
        errMsg.style.display = "none";
      }

      return userNameLogin.value;
}


function passwordUserName(){
    if (passwordLogin.value === "") {
        errMsg.style.display = "block";
        errMsg.innerHTML = "The username cannot be blank!";
        passwordLogin.focus();
        console.log("Error: The password cannot be blank!");
        return false;
      } else {
        errMsg.style.display = "none";
      }

      return passwordLogin.value;
}



