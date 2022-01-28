const btnMenu = document.getElementById('btn');
const Menu = document.getElementById('MenuP');
const headerImg = document.getElementById('headerImg');
const menuClose = document.getElementById('menuClose');
const links = document.querySelectorAll('.mobileMenu li a');

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
    const mg = `project-picture${i + 1}`;
    picture.classList.add(mg);

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

      const flexr = document.createElement('div');
      flexr.classList.add('flexr');

      const close = document.createElement('img');
      close.src = 'images/Union24.png';
      close.alt = 'navbar menu close';
      close.classList.add('projectCloseM');
      close.addEventListener('click', () => {
        Container.remove();
        close.remove();
        const Psec = document.getElementById('PortfolioM');
        Psec.classList.remove('MenuInvisible');
      });
      flexr.appendChild(close);
      project.appendChild(flexr);

      Container.innerHTML = `<h1 class="name">${projects[i].title}</h1>
        <ul class="languages2">
        ${projects[i].languages.map((t) => `<li class="lang2">${t}</li>`).join('')}
        </ul>
      <div class="cardPorejcts">
      <img  src="${projects[i].image}" alt=""project Img2">
      <ul class="projectPicture">
        <li class="imgBorder"><img class="P1img" onclick="" src="${projects[i].image}" alt="project Img"><li>
        <li><img class="P1img" onclick="" src="${projects[i].image}" alt=""project Img2"><li>
        <li><img class="P1img" onclick="" src="${projects[i].image}" alt=""project Img3"><li>
        <li><img class="P1img" onclick="" src="${projects[i].image}" alt=""project Img4"><li>
      </ul>
      </div>
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

      const Psec = document.getElementById('PortfolioM');
      Psec.classList.add('MenuInvisible');
    });
    return null;
  });
}

function portfolioD() {
  projects.map((el, i) => {
    const mg = `card-deskotop${i + 1}`;
    const mg1 = `projects${i + 1}`;
    let project = document.getElementById(mg);
    if (i > 1) {
      project = document.getElementById(mg1);
    }
    if (i === 2) {
      const picture = document.createElement('img');
      picture.classList.add('img4');
      picture.src = 'images/Rectangle_27.svg';
      picture.alt = 'project3img';
      const picture2 = document.createElement('img');
      picture2.classList.add('img5');
      picture2.src = 'images/image-geometry_3.svg';
      picture2.alt = 'project3img2';
      project.appendChild(picture);
      project.appendChild(picture2);
      return null;
    }
    if (i === 3) {
      const picture = document.createElement('img');
      picture.classList.add('img6');
      picture.src = 'images/image-geometry_5.svg';
      picture.alt = 'project4img';
      project.appendChild(picture);

      const sec = document.createElement('section');
      sec.classList.add('group');
      const picture2 = document.createElement('img');
      picture2.classList.add('img7');
      picture2.src = 'images/image-geometry_4.svg';
      picture2.alt = 'project4img';
      sec.appendChild(picture2);

      const picture3 = document.createElement('img');
      picture3.classList.add('img8');
      picture3.src = 'images/Rectangle_47.png';
      picture3.alt = 'project4img2';
      sec.appendChild(picture3);

      project.appendChild(sec);

      return null;
    }
    if (i > 3) {
      return null;
    }

    const picture = document.createElement('div');
    picture.classList.add(`img${i + 1}`);
    project.appendChild(picture);

    const div1 = document.createElement('section');
    div1.innerHTML = `<h2 class="title">${el.title}</h2>
    <ul class="languages">
    ${el.languages.map((t) => `<li class="lang">${t}</li>`).join('')}
    </ul>
    <a  href="#" class="project-linkD">See this project<img class="link-img" src="images/Union2.png" alt="project link"></a>`;
    project.appendChild(div1);
    if (i === 1) {
      const picture2 = document.createElement('div');
      picture2.classList.add(`img${i + 2}`);
      project.appendChild(picture2);
    }

    return null;
  });
}

function popUpD() {
  const buttons = document.querySelectorAll('a.project-linkD');
  const buttonArr = Array.from(buttons);
  buttonArr.map((el, i) => {
    el.addEventListener('click', () => {
      const project = document.getElementById('portfoiloDMenu');

      const box = document.createElement('div');
      box.classList.add('projectBox');

      const Container = document.createElement('section');
      Container.classList.add('projectMargin');

      Container.innerHTML = `
      <img id="projectCloseMD" class="projectClose" onclick="" src="images/ic_cross.png"alt="navbar menu">
      <h1 class="name2">${projects[i].title}</h1>
        <ul class="languages3">
        ${projects[i].languages.map((t) => `<li class="lang3">${t}</li>`).join('')}
        </ul>
      <div class="cardPorejctsD${i + 1}"></div>
      <ul class="projectPicture2">
        <li class="imgBorder2"><img class="P2img" onclick="" src="${projects[i].image}" alt="project Img"><li>
        <li><img class="P2img" onclick="" src="${projects[i].image}" alt=""project Img2"><li>
        <li><img class="P2img" onclick="" src="${projects[i].image}" alt=""project Img3"><li>
        <li><img class="P2img" onclick="" src="${projects[i].image}" alt=""project Img4"><li>
      </ul>
      <div class="flexP">
        <p class="descriptionPD">
        ${projects[i].description}
        </p>
        <ul class="linksPD">
          <li class="PLink">See live <img class="link-img" src="images/ic_link.png" alt="project demo">
          </li>
          <li class="PLink">See source <img class="link-img" src="images/Vector.svg" alt="project github">
          </li>
        </ul>
        <ul class="NextPD">
          <li class="PDLink"><img class="link-img2" src="images/Union_(1).svg"
                  alt="project Arrow Previous">Previous project
          </li>
          <li class="PDLink1">Next project<img class="link-img" src="images/Union.svg"
                  alt="project Arrow Next">
          </li>
        </ul>
      </div>`;

      box.appendChild(Container);

      project.appendChild(box);

      const close = document.getElementById('projectCloseMD');
      close.src = 'images/ic_cross.png';
      close.alt = 'navbar menu close';
      close.classList.add('projectClose');
      close.addEventListener('click', () => {
        const Psec = document.getElementById('PortfolioD');
        Psec.classList.remove('MenuInvisible');
        box.remove();
      });

      const Psec = document.getElementById('PortfolioD');
      Psec.classList.add('MenuInvisible');
    });
    return null;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  portfolio();
  popUp();
  portfolioD();
  popUpD();
});

const Form = document.getElementById('form');
const email = document.getElementById('email');
const FormError = document.getElementById('lblError');

const FormD = document.getElementById('formD');
const FormErrorD = document.getElementById('lblErrorD');
const emailD = document.getElementById('emailD');

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

const closeMenuMobile = function () {
  if (Menu.classList.contains('MenuVisible')) {
    Menu.classList.add('MenuInvisible');
    Menu.classList.remove('MenuVisible');
    headerImg.classList.remove('MenuInvisible');
  }
};

btnMenu.addEventListener('click', openAndClose);
menuClose.addEventListener('click', openAndClose);

links.forEach((element) => {
  element.addEventListener('click', closeMenuMobile);
});

Form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    FormError.classList.remove('MenuInvisible');
    e.preventDefault();
  } else {
    FormError.classList.add('MenuInvisible');
  }
});

FormD.addEventListener('submit', (e) => {
  if (emailD.value !== emailD.value.toLowerCase()) {
    FormErrorD.classList.remove('MenuInvisible');
    e.preventDefault();
  } else {
    FormErrorD.classList.add('MenuInvisible');
  }
});

function scroll() {

  var $body = $(document);
  $body.bind('scroll', function() {
      if ($body.scrollLeft() !== 0) {
          $body.scrollLeft(0);
      }
  });
}

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      && (e.code === 22
        || e.code === 1014
        || e.name === 'QuotaExceededError'
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && storage
      && storage.length !== 0
    );
  }
}

const field = Array.of(...document.getElementsByClassName('form-field'));
let fields = { name: String, email: String, message: String };

if (storageAvailable('localStorage')) {
  if (localStorage.getItem('fields')) {
    fields = JSON.parse(localStorage.getItem('fields'));
    field.forEach((field) => {
      if (fields[field.id]) {
        field.value = fields[field.id];
      }
    });
  }
} else {
  console.log('Local Storage not available');
}

const updateHandler = ({ target }) => {
  fields[target.id] = target.value;
  localStorage.setItem('fields', JSON.stringify(fields));
};

field.forEach((field) => {
  field.addEventListener('change', updateHandler);
  field.addEventListener('keypress', updateHandler);
});

const fieldM = Array.of(...document.getElementsByClassName('form-fieldM'));
let fieldsM = { name: String, email: String, message: String };

if (storageAvailable('localStorage')) {
  if (localStorage.getItem('fieldsM')) {
    fieldsM = JSON.parse(localStorage.getItem('fieldsM'));
    fieldM.forEach((fieldM) => {
      if (fieldsM[fieldM.id]) {
        fieldM.value = fieldsM[fieldM.id];
      }
    });
  }
} else {
  console.log('Local Storage not available');
}

const updateHandlerM = ({ target }) => {
  fieldsM[target.id] = target.value;
  localStorage.setItem('fieldsM', JSON.stringify(fieldsM));
};

fieldM.forEach((fieldM) => {
  fieldM.addEventListener('change', updateHandlerM);
  fieldM.addEventListener('keypress', updateHandlerM);
});
