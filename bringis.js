var regBtn = document.querySelector('.open-reg');
var regWrapper = document.querySelector('.reg-wrapper');
var regClose = document.querySelector('.reg-close')

regBtn.addEventListener('click', function(){
    regWrapper.classList.add('reg-active');
})

regClose.addEventListener('click', function(){
    regWrapper.classList.remove('reg-active');
})

var logBtn = document.querySelector('.open-login');
var logWrapper = document.querySelector('.log-wrapper');
var logClose = document.querySelector('.log-close')

logBtn.addEventListener('click', function(){
    logWrapper.classList.add('log-active');
})

logClose.addEventListener('click', function(){
    logWrapper.classList.remove('log-active');
})

function homePage(){
    console.log("home page")
    window.location.reload()
}

function aboutUs(){
console.log("about us")
}
aboutUs()

function register(){
    console.log("register")
}
register()

function logIn(){
console.log("log in")
}
logIn()

function contactUs(){
    console.log("contact us")
}
contactUs()

function search(){
console.log("search")
}
search()