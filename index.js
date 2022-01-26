const btnMenu = document.getElementById('btn');
const Menu = document.getElementById('MenuP');
const headerImg = document.getElementById('headerImg');
const menuClose = document.getElementById('menuClose');
const links = document.querySelectorAll('.mobileMenu li a');
const PortfolioM = document.getElementById('PortfolioM');
const PortfolioMenu = document.getElementById('PortfolioMenu');
const PBtn = document.getElementById('PBtn');
const projectCloseM = document.getElementById('projectCloseM');

const PortfolioD = document.getElementById('PortfolioD');
const portfolioDMenu = document.getElementById('portfolioDMenu');
const PDBtn = document.getElementById('PDBtn');
const projectCloseMD = document.getElementById('projectCloseMD');

const Form = document.getElementById('form');
let email = document.getElementById('email');
let FormError = document.getElementById('lblError');

const FormD = document.getElementById('formD');
let FormErrorD = document.getElementById('lblErrorD');
let emailD = document.getElementById('emailD');



const openAndClose = function () {
  if (Menu.classList.contains('MenuInvisible')) {
    Menu.classList.remove('MenuInvisible');
    Menu.classList.add('MenuVisible');
    headerImg.classList.add('MenuInvisible');
  } else if (Menu.classList.contains('MenuVisible')) {
    Menu.classList.add('MenuInvisible');
    Menu.classList.remove('MenuVisible');
    headerImg.classList.remove('MenuInvisible');
  }
};

const openP = function () {
  if (PortfolioM.classList.contains('MenuVisible')) {
    PortfolioM.classList.remove('MenuVisible');
    PortfolioM.classList.add('MenuInvisible');
    PortfolioMenu.classList.remove('MenuInvisible');
    PortfolioMenu.classList.add('MenuVisible');
  }
};

const closeP = function () {
  if (PortfolioMenu.classList.contains('MenuVisible')) {
    PortfolioMenu.classList.remove('MenuVisible');
    PortfolioMenu.classList.add('MenuInvisible');
    PortfolioM.classList.remove('MenuInvisible');
    PortfolioM.classList.add('MenuVisible');
  }
};

const openPD = function () {
  if (PortfolioD.classList.contains('MenuVisible')) {
    PortfolioD.classList.remove('MenuVisible');
    PortfolioD.classList.add('MenuInvisible');
    portfolioDMenu.classList.remove('MenuInvisible');
    portfolioDMenu.classList.add('MenuVisible');
  }
};

const closePD = function () {
  if (portfolioDMenu.classList.contains('MenuVisible')) {
    portfolioDMenu.classList.remove('MenuVisible');
    portfolioDMenu.classList.add('MenuInvisible');
    PortfolioD.classList.remove('MenuInvisible');
    PortfolioD.classList.add('MenuVisible');
  }
};

const closeMenuMobile = function () {
  if (Menu.classList.contains('MenuVisible')) {
    Menu.classList.add('MenuInvisible');
    Menu.classList.remove('MenuVisible');
    headerImg.classList.remove('MenuInvisible');
  }
};

btnMenu.addEventListener('click', openAndClose);
PBtn.addEventListener('click', openP);
projectCloseM.addEventListener('click', closeP);
PDBtn.addEventListener('click', openPD);
projectCloseMD.addEventListener('click', closePD);
menuClose.addEventListener('click', openAndClose);

links.forEach((element) => {
  element.addEventListener('click', closeMenuMobile);
});

const projects = [
  {
    image: '../images/Rectangle_21.png',
    title: 'Project 1',
    languages: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    linkLiveVersion: '#',
    linkToSource: '#',
  },
  {
    image: '../images/Rectangle_22.png',
    title: 'Project 2',
    languages: ['HTML/CSS', 'Ruby on Rails', '+1'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    linkLiveVersion: '#',
    linkToSource: '#',
  },
  {
    image: '../images/Rectangle_23.png',
    title: 'Project 3',
    languages: ['HTML/CSS', 'Ruby on Rails', '+1'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    linkLiveVersion: '#',
    linkToSource: '#',
  },
  {
    image: '../images/Rectangle_24.png',
    title: 'Project 4',
    languages: ['HTML/CSS', 'Ruby on Rails', '+1'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    linkLiveVersion: '#',
    linkToSource: '#',
  },
  {
    image: '../images/Rectangle_25.png',
    title: 'Project 5',
    languages: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    linkLiveVersion: '#',
    linkToSource: '#',
  },
  {
    image: '../images/Rectangle_26.png',
    title: 'Project 6',
    languages: ['HTML/CSS', 'Ruby on Rails', '+1'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    linkLiveVersion: '#',
    linkToSource: '#',
  },
];

