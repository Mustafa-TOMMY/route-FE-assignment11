var accountDataBase = JSON.parse(localStorage.getItem("allEmails")) || []

var userEmailValue = document.getElementById("userEmail")
var userPasswordValue = document.getElementById("userPassword")
var signInbtn = document.getElementById("signInbtn")

signInbtn.addEventListener('click', ckeckSignIn);

function ckeckSignIn() {
    for (i = 0; i < accountDataBase.length; i++) {
        if (accountDataBase[i].email !== userEmailValue.value) {
            notFoundAlert("email")
        }
        else if (accountDataBase[i].password !== userPasswordValue.value) {
            notFoundAlert("pass")
        }
        else {
            window.location.href = "login.html";
        }
    }
}

function notFoundAlert(term) {
    Swal.fire({
        icon: "error",
        title: "wrong input ",
        text: `${term} wrong!`,
        footer: '<a href="signUp.html">sign up if you dont have email</a>'
    });
}
