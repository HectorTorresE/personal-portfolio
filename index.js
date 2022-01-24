const btnMenu = document.getElementById('btn');
const Menu = document.getElementById('MenuP');
const headerImg = document.getElementById('headerImg');
const menuClose = document.getElementById('menuClose');

openAndClose = function () {
  if (Menu.classList.contains('MenuInvisible')){
    Menu.classList.remove('MenuInvisible');
    Menu.classList.add('MenuVisible');
    headerImg.classList.add('MenuInvisible');
  } else if (Menu.classList.contains('MenuVisible')) {
    Menu.classList.add('MenuInvisible');
    Menu.classList.remove('MenuVisible');
    headerImg.classList.remove('MenuInvisible');
  }
};

btnMenu.addEventListener('click', openAndClose);
menuClose.addEventListener('click', openAndClose);
