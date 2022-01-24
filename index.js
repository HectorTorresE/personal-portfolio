let btnMenu = document.getElementById('btn');
let Menu = document.getElementById('MenuP');
let headerImg = document.getElementById('headerImg');
let menuClose = document.getElementById('menuClose');



const openAndClose = function () {
  if (Menu.classList.contains("MenuInvisible")){
    Menu.classList.remove("MenuInvisible");
    Menu.classList.add("MenuVisible");
    headerImg.classList.add("MenuInvisible");
  }
  else if (Menu.classList.contains("MenuVisible")) {
    Menu.classList.add("MenuInvisible");
    Menu.classList.remove("MenuVisible");
    headerImg.classList.remove("MenuInvisible");
  }
};


btnMenu.addEventListener('click', openAndClose);
menuClose.addEventListener('click', openAndClose);
