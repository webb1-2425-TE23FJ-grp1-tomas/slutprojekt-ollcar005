// const burgerMenu = document.querySelector(".hamburger-menu");
// document.getElementById("menu").classList.add("hidden");

const menuList = document.querySelector("#menu");
const burger = document.querySelector("#burger");

burger.addEventListener('click', function() {
    menuList.classList.toggle("overlay");
  });