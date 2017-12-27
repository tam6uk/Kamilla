
var button = document.querySelector(".btn-hotels");
var popup = document.querySelector(".popup");

var date_race = popup.querySelector("[name=date]");

button.addEventListener("click" , function(event) {
    if (popup.classList.contains("popup-show")) {
        popup.classList.remove("popup-show");
        popup.classList.add("popup-hide");
    } 
    else {
        popup.classList.add("popup-show");
        popup.classList.remove("popup-hide");
    }
})