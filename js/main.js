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