
var button = document.querySelector(".btn-hotels");
var popup = document.querySelector(".popup");

var date_race = popup.querySelector("[name=date]");


button.addEventListener("click" , function(event) {
    event.preventDefault();
    console.log("Нажатие на кнопку");
    popup.classList.toggle("popup-show");
    date_race.focus();
})