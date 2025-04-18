const burgerMenu = document.querySelector(".hamburger-menu");
document.getElementById("menu").classList.add("hidden");

burgerMenu.addEventListener("click", function(){
    document.getElementById("menu").classList.toggle("hidden");
})