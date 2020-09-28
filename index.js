console.log('hello, again! i\'m back!')

document.querySelector('.tabheader').addEventListener('click', (event) => {
  const tabs = document.querySelectorAll('.tabs-item');
  if (event.target && event.target.classList.contains('tabs-item')) {
    console.log('contains tab')
    tabs.forEach((item, i) => {
      if (event.target == item) {
        item.classList.add('tabheader__item_active');
      } else {
        item.classList.remove('tabheader__item_active');
      }
    })
  }
});


const menuBox = document.querySelector('.menu__box');
menuBox.addEventListener('click', (event) => {
  const sideBarTabs = document.querySelectorAll('.menu__item');
  if (event.target && event.target.classList.contains('menu__item')) {
    sideBarTabs.forEach((item, i) => {
      if (event.target == item) {
        menuBox.style.visibility = 'visible';
      }
    })
  }
})