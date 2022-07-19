const hamburger = document.getElementById("hamburger-icon");
const menuBox = document.querySelector(".menu__box");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const homeTab = document.querySelector(".home");
const tabs = document.querySelectorAll(".tabs-item");

document.addEventListener("DOMContentLoaded", function () {
  homeTab.classList.add("tabheader__item_active");

  hamburger.onclick = function () {
    hamburger.classList.toggle("active");
    menuBox.style.visibility =
      menuBox.style.visibility === "visible" ? "" : "visible";
    return false;
  };
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset === 0) {
    homeTab.classList.add("tabheader__item_active");
  } else {
    tabs.forEach((item, i) => {
      item.classList.remove("tabheader__item_active");
    });
  }
});

menuBox.addEventListener("click", (event) => {
  const tabs = document.querySelectorAll(".menu__item");
  if (event.target && event.target.classList.contains("menu__item")) {
    tabs.forEach((item, i) => {
      if (event.target == item) {
        console.log("das");
        hamburger.classList.toggle("active");
        menuBox.style.visibility =
          menuBox.style.visibility === "visible" ? "" : "visible";
      }
    });
  }
});

document.querySelector(".tabheader").addEventListener("click", (event) => {
  if (event.target && event.target.classList.contains("tabs-item")) {
    tabs.forEach((item, i) => {
      if (event.target == item) {
        item.classList.add("tabheader__item_active");
      } else {
        item.classList.remove("tabheader__item_active");
      }
    });
  }
});

document.querySelector(".btn").addEventListener("click", () => {
  console.log("mail");
  window.location = document.getElementById("mail-link").href;
});

$(function () {
  $(".scrollup").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $(".scrollup").fadeIn();
  } else {
    $(".scrollup").fadeOut();
  }
});
