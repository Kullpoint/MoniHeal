// Section header languages
const agnleOpen = document.getElementById('angle-open');
const angles = document.getElementById('angles');
const languagesList = document.querySelector('.languages__list');
const languagesListItem = languagesList.getElementsByTagName('li');

agnleOpen.addEventListener('click', () => {
   if (angles.style.transform == "rotate(180deg)") {
      angles.style.transform = "rotate(0deg)";
      languagesList.classList.remove('languages__list-open');

   } else {
      angles.style.transform = "rotate(180deg)";
      languagesList.classList.add('languages__list-open');
   }
});

for (let item of languagesListItem) {
   item.addEventListener('click', () => {
      angles.style.transform = "rotate(0deg)";
      languagesList.classList.remove('languages__list-open');
   });
}

// Section header menu
const menuOpen = document.getElementById('menu-open');
const menu = document.querySelector('.section-header__menu-list');
const menuItem = menu.getElementsByTagName('li');

menuOpen.addEventListener('click', () => {
   if (menu.classList.contains('section-header__menu-list-open')) {
      menu.classList.remove('section-header__menu-list-open');

   } else {
      menu.classList.add('section-header__menu-list-open');
   }
});

for (let item of menuItem) {
   item.addEventListener('click', () => {
      menu.classList.remove('section-header__menu-list-open');
   });
}

// =================================================================================

// Section services buttons
const servicesBeforeBtn = document.querySelector('.section-services__before');
const servicesAfterBtn = document.querySelector('.section-services__after');
const servicesContainer = document.querySelector('.section-services__services');
let servicesLeft = 0;

servicesBeforeBtn.addEventListener('click', () => {
   if (servicesLeft < 0) {
      servicesLeft += 360;
      servicesContainer.style = `transform: translateX(${servicesLeft}px)`;
   } else if (servicesLeft == 0) {
      servicesLeft = -720;
      servicesContainer.style = `transform: translateX(${servicesLeft}px)`;
   }
});

servicesAfterBtn.addEventListener('click', () => {
   if (servicesLeft != -720) {
      servicesLeft -= 360;
      servicesContainer.style = `transform: translateX(${servicesLeft}px)`;
   } else {
      servicesLeft = 0;
      servicesContainer.style = `transform: translateX(${servicesLeft}px)`;
   }
});

// =================================================================================

// Section services buttons
const doctorsBeforeBtn = document.getElementById('doctors-before');
const doctorsAfterBtn = document.getElementById('doctors-after');
const doctorsContainer = document.querySelector('.section-doctors__doctors');
let doctorsLeft = 0;

doctorsBeforeBtn.addEventListener('click', () => {
   if (doctorsLeft < 0) {
      doctorsLeft += 360;
      doctorsContainer.style = `transform: translateX(${doctorsLeft}px)`;
   } else if (doctorsLeft == 0) {
      doctorsLeft = -720;
      doctorsContainer.style = `transform: translateX(${doctorsLeft}px)`;
   }
});

doctorsAfterBtn.addEventListener('click', () => {
   if (doctorsLeft != -720) {
      doctorsLeft -= 360;
      doctorsContainer.style = `transform: translateX(${doctorsLeft}px)`;
   } else {
      doctorsLeft = 0;
      doctorsContainer.style = `transform: translateX(${doctorsLeft}px)`;
   }
});

// =================================================================================

// Phone list (open and close)
const phoneOpenBtn = document.getElementById('phone__open');
const phoneCloseBtn = document.getElementById('phone__close');
const phoneList = document.getElementById('phone__list');

phoneOpenBtn.addEventListener('click', () => {
   phoneList.classList.add('phone-list__open');
});

phoneCloseBtn.addEventListener('click', () => {
   phoneList.classList.remove('phone-list__open');
});

// =================================================================================

// Map (open and close)
const mapOpenBtn = document.getElementById('map-open');
const mapCloseBtn = document.getElementById('map-close');
const map = document.getElementById('map');

mapOpenBtn.addEventListener('click', () => {
   map.classList.add('map__open');
});

mapCloseBtn.addEventListener('click', () => {
   map.classList.remove('map__open');
});

// =================================================================================

// Gallery (open and close)
const galleryOpenBtn = document.getElementById('gallery-open');
const galleryCloseBtn = document.getElementById('gallery-close');
const gallery = document.getElementById('gallery');

galleryOpenBtn.addEventListener('click', () => {
   gallery.classList.add('gallery__open');
});

galleryCloseBtn.addEventListener('click', () => {
   gallery.classList.remove('gallery__open');
});

// Gallery (slide images)
const viewImg = document.getElementById('view__container').getElementsByTagName('img');
const subImg = document.getElementById('photos__list').getElementsByTagName('img');
let currentImg = 0;

if (subImg[currentImg]) {
   subImg[currentImg].classList.add('gallery-opened__photo-active');
   viewImg[currentImg].classList.add('view__img-active');
}

for (let i = 0; i < subImg.length; i++) {
   subImg[i].addEventListener('click', () => {
      if (subImg[i] != currentImg) {
         subImg[currentImg].classList.remove('gallery-opened__photo-active');
         viewImg[currentImg].classList.remove('view__img-active');

         currentImg = i;

         subImg[currentImg].classList.add('gallery-opened__photo-active');
         viewImg[currentImg].classList.add('view__img-active');
      }
   });
}

// Gallery (active buttons)
const photoBeforeBtn = document.querySelector('.photo-before__btn');
let photoAfterBtn = document.querySelector('.photo-after__btn');
let listBeforeBtn = document.querySelector('.list-before__btn');
let listAfterBtn = document.querySelector('.list-after__btn');
const photosList = document.querySelector('.gallery-opened__list');
let listLeft = 0;

photoBeforeBtn.addEventListener('click', () => {
   if (currentImg < viewImg.length && currentImg !== 0) {

      subImg[currentImg].classList.remove('gallery-opened__photo-active');
      viewImg[currentImg].classList.remove('view__img-active');

      currentImg--;

      subImg[currentImg].classList.add('gallery-opened__photo-active');
      viewImg[currentImg].classList.add('view__img-active');

   } else {

      subImg[currentImg].classList.remove('gallery-opened__photo-active');
      viewImg[currentImg].classList.remove('view__img-active');

      currentImg = viewImg.length -1;

      subImg[currentImg].classList.add('gallery-opened__photo-active');
      viewImg[currentImg].classList.add('view__img-active');
      
   }

   if (currentImg === viewImg.length -1) {
      listLeft = -2016;
   
      photosList.style = `left: ${listLeft}px;`;
   }
});

photoAfterBtn.addEventListener('click', () => {
      if (currentImg < viewImg.length -1) {

         subImg[currentImg].classList.remove('gallery-opened__photo-active');
         viewImg[currentImg].classList.remove('view__img-active');

         currentImg++;

         subImg[currentImg].classList.add('gallery-opened__photo-active');
         viewImg[currentImg].classList.add('view__img-active');

      } else {

         subImg[currentImg].classList.remove('gallery-opened__photo-active');
         viewImg[currentImg].classList.remove('view__img-active');

         currentImg = 0;

         subImg[currentImg].classList.add('gallery-opened__photo-active');
         viewImg[currentImg].classList.add('view__img-active');

      }

      if (currentImg === 0) {
         listLeft = 0;
      
         photosList.style = `left: ${listLeft}px;`;
      }
});

listBeforeBtn.addEventListener('click', () => {
   if (listLeft != 0) {
      listLeft += 288;
   }
   
   photosList.style = `left: ${listLeft}px;`;
});

listAfterBtn.addEventListener('click', () => {
   if (listLeft != -2016) {
      listLeft -= 288;
   }
   
   photosList.style = `left: ${listLeft}px;`;
});

// =================================================================================

// Fixed-Header (show (hide) on scroll)
const fixedHeader = document.querySelector('.float-header');

window.addEventListener('scroll', () => {
   let scrollY = window.scrollY;

   if (scrollY > 765) {
      fixedHeader.classList.add('float-header-show');
   } else if (scrollY < 160) {
      fixedHeader.classList.remove('float-header-show');
   }
});

// =================================================================================

// Preloader
const mask = document.querySelector('.global__mask');

window.addEventListener('load', () => {
   mask.classList.add('global__hide');
   setTimeout(() => {
      mask.remove();
   }, 600);
});

// =================================================================================