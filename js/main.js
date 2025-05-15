const ana = document.querySelector("#ana");
const menuList = document.querySelector("#menu");
const burger = document.querySelector("#burger");
const stats = document.querySelector(".stats");
const stats2 = document.querySelector(".stats2");
// let menuHidden = true;
let openedBox = false;

ana.addEventListener("click", function(){
    ana.classList.toggle("opened");
    if(!openedBox) {
        document.getElementById("anaIMG").src = "assets/heroes/Ana-Big.webp";
        
        openedBox = true;

        stats.setAttribute("style", "display:block;");
        stats2.setAttribute("style", "display:block;");
    } else {
        document.getElementById("anaIMG").src = "assets/heroes/Icon-Ana.webp";
        
        openedBox = false;

        stats.setAttribute("style", "display:none;");
        stats2.setAttribute("style", "display:none;");
    }
})

// burger.addEventListener("click", function(){
//     if(menuHidden){
//         menuList.setAttribute("style", "display:block;");
//         menuHidden = false;
//     } else {
//         menuList.setAttribute("style", "display:none;");
//         menuHidden = true;
//     }
    
// })

burger.addEventListener('click', function() {
    menuList.classList.toggle("overlay");
  });