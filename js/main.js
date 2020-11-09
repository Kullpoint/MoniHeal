// Phone list (open and close)
const phoneOpenBtn = document.getElementById('phone__open');
const phoneCloseBtn = document.getElementById('phone__close');
const phoneList = document.getElementById('phone__list');

phoneOpenBtn.addEventListener('click', () => {
   let display = phoneList.style.display;
   if (display === 'none') {
      phoneList.style.display = 'block';
   }
});

phoneCloseBtn.addEventListener('click', () => {
   let display = phoneList.style.display;
   if (display === 'block') {
      phoneList.style.display = 'none';
   }
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