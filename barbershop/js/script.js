    
    
var link = document.querySelector(".login");
var overlay = document.querySelector(".modal-overlay");
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("нажатие на ссылку");
    overlay.classList.add("modal-overlay-show");
    popup.classList.add("popup-show");

    if (storage) {
        login.value = storage;
    }

    login.focus();
})

close.addEventListener("click" , function(event) {
    event.preventDefault();
    console.log("закрытие попапа");
    overlay.classList.remove("modal-overlay-show");
    popup.classList.remove("popup-show");
})

form.addEventListener("submit" , function(event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        console.log("нужно ввести логин и пароль");
        popup.classList.add("modal-error");
    }
    else {
        localStorage.setItem("login", login.value);
    }
})

var map_open = document.querySelector(".btn-map");
var map = document.querySelector(".map_popup");
var map_close = document.querySelector(".map-close");

map_open.addEventListener("click" , function(event) {
    event.preventDefault();
    console.log("нажатие на кнопку");
    overlay.classList.add("modal-overlay-show");
    map.classList.add("popup-show");
})

map_close.addEventListener("click" , function(event) {
    event.preventDefault();
    overlay.classList.remove("modal-overlay-show");
    map.classList.remove("popup-show");
})
overlay.addEventListener("click" , function(event) {
    event.preventDefault();
    overlay.classList.remove("modal-overlay-show");
    popup.classList.remove("popup-show");
    map.classList.remove("popup-show");
})

