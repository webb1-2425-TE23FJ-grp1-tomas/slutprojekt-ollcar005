const ana = document.querySelector("#ana");
const burgerMenu = document.querySelector(".hamburger-menu");

ana.addEventListener("click", function(){
    ana.classList.toggle("opened");
})

burgerMenu.addEventListener("click", function(){
    document.getElementById("menu").classList.toggle("hidden");
})