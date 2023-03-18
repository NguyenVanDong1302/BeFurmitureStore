const menuHeader = document.querySelector(".header-menu-wrapper");

const btnToggleMenu1 = document.querySelector(".toggle-menu-1");
const btnCloseMenu1 = document.querySelector(".btn-close-menu-1");
const btnBgMenu1 = document.querySelector(".blur-toggle-menu");
btnToggleMenu1.addEventListener("click", () => {
  menuHeader.classList.toggle("sticky-menu-1");
  btnBgMenu1.classList.toggle("d-flex");
});
btnCloseMenu1.addEventListener("click", () => {
  menuHeader.classList.toggle("sticky-menu-1");
  btnBgMenu1.classList.toggle("d-flex");
});
btnBgMenu1.addEventListener("click", () => {
  menuHeader.classList.toggle("sticky-menu-1");
  btnBgMenu1.classList.toggle("d-flex");
});

const headerNav = document.querySelector(".header-nav");
const headerCenter = document.querySelector(".header-center");
const headerWrapper = document.querySelector(".header-wrapper");
window.addEventListener("scroll", function () {
  if (window.scrollY >= headerNav.offsetHeight + headerNav.offsetTop) {
    headerWrapper.classList.add("sticky");
  } else {
    headerWrapper.classList.remove("sticky");
  }
});

const footer = document.querySelector(".footer-wrapper");

const btnTagLogin = document.querySelector(".btn-tag-login");
const tagLogin = document.querySelector(".tag-login");

btnTagLogin.addEventListener("click", () => {
  tagLogin.classList.toggle("d-none");
});
