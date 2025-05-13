
const menuList = document.querySelector("#menu");
const burger = document.querySelector("#burger");

burger.addEventListener('click', function() {
    this.classList.toggle("close");
    menuList.classList.toggle("overlay");
  });