var accountDataBase = JSON.parse(localStorage.getItem("allEmails")) || []

var newUserEmail = document.getElementById("newUserEmail")
var newUserPass = document.getElementById("newUserPassword")
var UserName = document.getElementById("userName")
var signUpbtn = document.getElementById("signUpbtn")
var nameValid = /^[A-z ]{3,}$/i
var emailValid = /^\w{3,}@(yahoo|gmail)\.(com)$/
var passValid = /^\w{8,11}$/

signUpbtn.addEventListener('click', checkSignUp);


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
    if (accountDataBase.length !==0) {
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
    } else {
        return true
    }
}

function addNewEmail() {
    var newLogin = {
        user_Name: UserName.value,
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

function notValidAlert(term) {
    Swal.fire({
        icon: "error",
        title: "wrong input ",
        text: `${term}`,
    });
}
