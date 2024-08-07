let authcontainer = document.querySelector("#auth")

let login = document.querySelector("#login")

let signup = document.querySelector("#signup")

let loggedstatus = JSON.parse(localStorage.getItem("loggedStatus"))

if (loggedstatus){
    login.innerHTML = `hi , ${loggedstatus.username}`
}

login.addEventListener("click" , function(){
    window.location.href ="login.html"
})

signup.addEventListener("click" , function(){
    window.location.href ="signup.html"
})

