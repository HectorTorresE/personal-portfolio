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


FormD.addEventListener('submit', (e) => {
  if (emailD.value !== emailD.value.toLowerCase()) {
    FormErrorD.classList.remove('MenuInvisible');
    e.preventDefault();
  } else {
    FormErrorD.classList.add('MenuInvisible');
  }
});


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
