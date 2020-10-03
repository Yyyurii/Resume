console.log('hello, again! i\'m back!')
const hamburger = document.getElementById('hamburger-icon');
const menuBox = document.querySelector('.menu__box');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const homeTab = document.querySelector('.home');

document.addEventListener('DOMContentLoaded', function() {

  hamburger.onclick = (function() {
     hamburger.classList.toggle('active');
     menuBox.style.visibility = menuBox.style.visibility === 'visible' ? '' : 'visible';
     return false;
  });

});

menuBox.addEventListener('click', (event) => {

  const tabs = document.querySelectorAll('.menu__item');
  if (event.target && event.target.classList.contains('menu__item')) {
    tabs.forEach((item, i) => {
      if (event.target == item) {
        console.log('das')
        hamburger.classList.toggle('active');
        menuBox.style.visibility = menuBox.style.visibility === 'visible' ? '' : 'visible';
      }
    })
  }
});

document.querySelector('.tabheader').addEventListener('click', (event) => {
  const tabs = document.querySelectorAll('.tabs-item');
  if (event.target && event.target.classList.contains('tabs-item')) {
    tabs.forEach((item, i) => {
      if (event.target == item) {
        item.classList.add('tabheader__item_active');
      } else {
        item.classList.remove('tabheader__item_active');
      }
    })
  }
});





console.log(window.pageYOffset)