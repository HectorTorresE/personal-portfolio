const btnMenu = document.getElementById('btn');
const Menu = document.getElementById('MenuP');
const headerImg = document.getElementById('headerImg');
const menuClose = document.getElementById('menuClose');
const links = document.querySelectorAll('.mobileMenu li a');
// const PortfolioM = document.getElementById('PortfolioM');
// const PortfolioMenu = document.getElementById('PortfolioMenu');
// const PBtn = document.getElementById('PBtn');
// const projectCloseM = document.getElementById('projectCloseM');

// const PortfolioD = document.getElementById('PortfolioD');
// const portfolioDMenu = document.getElementById('portfolioDMenu');
// const PDBtn = document.getElementById('PDBtn');
// const projectCloseMD = document.getElementById('projectCloseMD');

// const openAndClose = function () {
//   if (Menu.classList.contains('MenuInvisible')) {
//     Menu.classList.remove('MenuInvisible');
//     Menu.classList.add('MenuVisible');
//     headerImg.classList.add('MenuInvisible');
//   } else if (Menu.classList.contains('MenuVisible')) {
//     Menu.classList.add('MenuInvisible');
//     Menu.classList.remove('MenuVisible');
//     headerImg.classList.remove('MenuInvisible');
//   }
// };

// const openP = function () {
//   if (PortfolioM.classList.contains('MenuVisible')) {
//     PortfolioM.classList.remove('MenuVisible');
//     PortfolioM.classList.add('MenuInvisible');
//     PortfolioMenu.classList.remove('MenuInvisible');
//     PortfolioMenu.classList.add('MenuVisible');
//   }
// };

// const closeP = function () {
//   if (PortfolioMenu.classList.contains('MenuVisible')) {
//     PortfolioMenu.classList.remove('MenuVisible');
//     PortfolioMenu.classList.add('MenuInvisible');
//     PortfolioM.classList.remove('MenuInvisible');
//     PortfolioM.classList.add('MenuVisible');
//   }
// };

// const openPD = function () {
//   if (PortfolioD.classList.contains('MenuVisible')) {
//     PortfolioD.classList.remove('MenuVisible');
//     PortfolioD.classList.add('MenuInvisible');
//     portfolioDMenu.classList.remove('MenuInvisible');
//     portfolioDMenu.classList.add('MenuVisible');
//   }
// };

// const closePD = function () {
//   if (portfolioDMenu.classList.contains('MenuVisible')) {
//     portfolioDMenu.classList.remove('MenuVisible');
//     portfolioDMenu.classList.add('MenuInvisible');
//     PortfolioD.classList.remove('MenuInvisible');
//     PortfolioD.classList.add('MenuVisible');
//   }
// };

// const closeMenuMobile = function () {
//   if (Menu.classList.contains('MenuVisible')) {
//     Menu.classList.add('MenuInvisible');
//     Menu.classList.remove('MenuVisible');
//     headerImg.classList.remove('MenuInvisible');
//   }
// };

// btnMenu.addEventListener('click', openAndClose);
// PBtn.addEventListener('click', openP);
// projectCloseM.addEventListener('click', closeP);
// PDBtn.addEventListener('click', openPD);
// projectCloseMD.addEventListener('click', closePD);
// menuClose.addEventListener('click', openAndClose);

// links.forEach((element) => {
//   element.addEventListener('click', closeMenuMobile);
// });

const projects = [
  {
    image: 'images/Rectangle_21.png',
    title: 'Project name goes here',
    languages: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    linkLiveVersion: '#',
    linkToSource: '#',
  },
  {
    image: 'images/Rectangle_22.png',
    title: 'Project name goes here',
    languages: ['HTML/CSS', 'Ruby on Rails', '+1'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    linkLiveVersion: '#',
    linkToSource: '#',
  },
  {
    image: 'images/Rectangle_23.png',
    title: 'Project name goes here',
    languages: ['HTML/CSS', 'Ruby on Rails', '+1'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    linkLiveVersion: '#',
    linkToSource: '#',
  },
  {
    image: 'images/Rectangle_24.png',
    title: 'Project name goes here',
    languages: ['HTML/CSS', 'Ruby on Rails', '+1'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    linkLiveVersion: '#',
    linkToSource: '#',
  },
  {
    image: 'images/Rectangle_25.png',
    title: 'Project name goes here',
    languages: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    linkLiveVersion: '#',
    linkToSource: '#',
  },
  {
    image: 'images/Rectangle_26.png',
    title: 'Project name goes here',
    languages: ['HTML/CSS', 'Ruby on Rails', '+1'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    linkLiveVersion: '#',
    linkToSource: '#',
  },
];

function portfolio() {
  const project = document.querySelector('div.portfolioM');
  projects.map((el, i) => {
    const picture = document.createElement('div');
    picture.classList.add('project-picture'+ (i+1));

    const div1 = document.createElement('div');
    div1.classList.add('card');
    div1.innerHTML = ` <h2 class="card-title">${el.title}</h2>
    <ul class="languages">
    ${el.languages.map((t) => `<li class="lang">${t}</li>`).join('')}
    </ul>
    <a href="#" class="project-link">See this project<img class="link-img" src="images/Union.png"
            alt="project link"></a>`;

    project.appendChild(picture);
    project.appendChild(div1);

    return null;
  });
}

function popUp() {
  const buttons = document.querySelectorAll('.card .project-link');
  const buttonArr = Array.from(buttons);
  buttonArr.map((el, i) => {
    el.addEventListener('click', () => {
      const project = document.getElementById('popUp');
      const Container = document.createElement('div');
      Container.classList.add('projectsFlex');

      const close = document.createElement('img');
      close.src = "images/Union24.png";
      close.alt = "navbar menu close"
      close.classList.add('projectCloseM')
      close.addEventListener('click', () => {
        Container.remove();
        close.remove();
      });
      project.appendChild(close);
      

      Container.innerHTML = `
      <h1 class="name">${projects[i].title}</h1>
        <ul class="languages2">
        ${projects[i].languages.map((t) => `<li class="lang2">${t}</li>`).join('')}
        </ul>
      <div class="cardPorejcts${i+1}"></div>
      <ul class="projectPicture">
        <li class="imgBorder"><img class="P1img" onclick="" src="${projects[i].image}" alt="project Img"><li>
        <li><img class="P1img" onclick="" src="${projects[i].image}" alt=""project Img2"><li>
        <li><img class="P1img" onclick="" src="${projects[i].image}" alt=""project Img3"><li>
        <li><img class="P1img" onclick="" src="${projects[i].image}" alt=""project Img4"><li>
      </ul>
      <p class="descriptionP">
      ${projects[i].description}
      </p>
      <ul class="linksP">
        <li class="PLink">See live <img class="link-img" src="images/ic_link.png" alt="project demo">
        </li>
        <li class="PLink">See source <img class="link-img" src="images/Vector.svg" alt="project github">
        </li>
      </ul>`;

      project.appendChild(Container);
      
    });
    return null;
  });
}


document.addEventListener('DOMContentLoaded', () => {
  portfolio();
  popUp()
});