let btnMenu = document.getElementById('btn');
let Menu = document.getElementById('MenuP');
let headerImg = document.getElementById('headerImg');
let menuClose = document.getElementById('menuClose');
let links = document.querySelectorAll('.mobileMenu li a');



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

const closeMenuMobile = function () {
  if (Menu.classList.contains("MenuVisible")) {
    Menu.classList.add("MenuInvisible");
    Menu.classList.remove("MenuVisible");
    headerImg.classList.remove("MenuInvisible");
  }
};

btnMenu.addEventListener('click', openAndClose);
menuClose.addEventListener('click', openAndClose);

links.forEach((element) => {
  element.addEventListener('click', closeMenuMobile);
})
