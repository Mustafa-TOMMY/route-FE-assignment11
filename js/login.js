var accountDataBase = JSON.parse(localStorage.getItem("allEmails")) || []

var userEmailValue = document.getElementById("userEmail")
var userPasswordValue = document.getElementById("userPassword")
var loginPage = document.getElementById("login-page")



for(i=0;i<accountDataBase.length ; i++){
    if(accountDataBase[i].email == userEmailValue.value || accountDataBase[i].password == userPasswordValue.value){
        loginPage.innerHTML = `<h1>Hi ${accountDataBase[i].user_Name}</h1>`
    }
}

