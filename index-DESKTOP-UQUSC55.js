console.log('hello, again! i\'m back!')
const hamburger = document.getElementById('hamburger-icon');
const menuBox = document.querySelector('.menu__box');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const homeTab = document.querySelector('.home');
const tabs = document.querySelectorAll('.tabs-item');

document.addEventListener('DOMContentLoaded', function () {
  homeTab.classList.add('tabheader__item_active');

  hamburger.onclick = (function () {
    hamburger.classList.toggle('active');
    menuBox.style.visibility = menuBox.style.visibility === 'visible' ? '' : 'visible';
    return false;
  });
});

window.addEventListener('scroll', function () {
  if (window.pageYOffset === 0) {
    homeTab.classList.add('tabheader__item_active');
  } else {
    tabs.forEach((item, i) => {
      item.classList.remove('tabheader__item_active');
    })
  }
});

menuBox.addEventListener('click', (event) => {
  const tabs = document.querySelectorAll('.menu__item');
  if (event.target && event.target.classList.contains('menu__item')) {
    tabs.forEach((item, i) => {
      if (event.target == item) {
        hamburger.classList.toggle('active');
        menuBox.style.visibility = menuBox.style.visibility === 'visible' ? '' : 'visible';
      }
    })
  }
});

document.querySelector('.tabheader').addEventListener('click', (event) => {
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

document.querySelector('.btn').addEventListener('click', () => {
  window.location = document.getElementById('mail-link').href;
})

$(function () {
  $('.scrollup').click(function () {
    $("html, body").scrollTop(0);
  })
})

$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $('.scrollup').fadeIn();
  }
  else {
    $('.scrollup').fadeOut();
  }

  if ($(this).scrollTop() > 100) {
    hamburger.classList.remove('active');
    menuBox.style.visibility = menuBox.style.visibility === 'visible' ? '' : '';
  }
});

// 
class Skills {
  constructor(src, alt, skillName, parent) {
    this.src = src;
    this.alt = alt;
    this.skillName = skillName;
    this.parent = document.querySelector(parent);
  }

  render() {
    const element = document.createElement('div');
    element.classList.add('skills-tab__item');
    element.innerHTML = `
      <img src="${this.src}" alt="${this.alt}">
      <span>${this.skillName}</span>
    `;
    this.parent.append(element);
  }
}

new Skills('images/html-icon.jpg', 'html 5', 'HTML 5', '.skills-container').render();
new Skills('images/css-icon.jpg', 'css3', 'CCS3', '.skills-container').render();
new Skills('images/javascript-icon.jpg', 'JavaScript', 'JavaScript', '.skills-container').render();
new Skills('images/jquery-icon.jpg', 'jQuery', 'jQuery', '.skills-container').render();
new Skills('images/react-icon.jpg', 'React', 'React', '.skills-container').render();
new Skills('images/gulp.png', 'Gulp', 'Gulp', '.skills-container').render();
new Skills('images/git-icon.jpg', 'Git', 'Git', '.skills-container').render();
