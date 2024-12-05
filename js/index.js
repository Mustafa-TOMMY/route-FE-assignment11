var accountDataBase = JSON.parse(localStorage.getItem("allEmails")) || []

var userEmailValue = document.getElementById("userEmail")
var userPasswordValue = document.getElementById("userPassword")
var signInbtn = document.getElementById("signInbtn")

var newUserEmail = document.getElementById("newUserEmail")
var newUserPass = document.getElementById("newUserPassword")
var UserName = document.getElementById("userName")
var signUpbtn = document.getElementById("signUpbtn")
var nameValid = /^[A-z ]{3,}$/i
var emailValid = /^\w{3,}@(yahoo|gmail)\.(com)$/
var passValid = /^\w{8,11}$/

var loginPage = document.getElementById("login-page")

signInbtn.addEventListener('click', ckeckSignIn);
signUpbtn.addEventListener('click', checkSignUp);

function ckeckSignIn() {

    for (i = 0; i < accountDataBase.length; i++) {
        if (accountDataBase[i].email !== userEmailValue.value) {
            notFoundAlert()
        }
        else if (accountDataBase[i].password !== userPasswordValue.value) {
            notFoundAlert()
        }
        else {
            loginPage.innerHTML = `<h1>Hi ${accountDataBase[i].userName}</h1>`
            window.location.href = "login.html";
        }
    }
}

function checkSignUp() {
    if (validation() && typicallity()) {
        addNewEmail()
    }
    else {
        Swal.fire({
            title: "wrong input",
            text: "your input is not a valid!",
            icon: "error"
        });;
    }
}

function validation() {

    if (nameValid.test(UserName.value) == false) {
        notValidAlert(`wrong User name`)
    }
    else if (emailValid.test(newUserEmail.value) == false) {
        notValidAlert(`wrong User email`)
    }
    else if (passValid.test(newUserPass.value) == false) {
        notValidAlert(`wrong User password`)
    }
    else {
        return true
    }
}

function typicallity() {

    for (i = 0; i < accountDataBase.length; i++) {
        if (newUserEmail.value === accountDataBase[i].email) {
            notValidAlert(`typical User email`)
        }
        else if (newUserPass.value === accountDataBase[i].password) {
            notValidAlert(`typical User password`)
        }
        else {
            return true
        }
    }
}

function addNewEmail() {
    var newLogin = {
        userName: UserName.value,
        email: newUserEmail.value,
        password: newUserPass.value,
    }
    accountDataBase.push(newLogin)
    localStorage.setItem("allEmails", JSON.stringify(accountDataBase))
    Swal.fire({
        title: "Good job!",
        text: "You sign up now!",
        icon: "success"
    });
}

function notFoundAlert() {
    Swal.fire({
        icon: "error",
        title: "wrong input ",
        text: "Something went wrong!",
        footer: '<a href="signUp.html">sign up if you dont have email</a>'
    });
}

function notValidAlert(term) {
    Swal.fire({
        icon: "error",
        title: "wrong input ",
        text: `${term}`,
    });
}
