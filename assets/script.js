let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector("#menu-toggler");
let body = document.getElementsByTagName("body")[0];
let main = document.getElementsByTagName("main")[0];

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  body.classList.toggle("active");
  if (menuBtn.src.match("./assets/images/icon-menu.svg")) {
    menuBtn.src = "./assets/images/icon-menu-close.svg";
  } else {
    menuBtn.src = "./assets/images/icon-menu.svg";
  }
});

main.addEventListener("click", () => {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    body.classList.remove("active");
    menuBtn.src = "./assets/images/icon-menu.svg"
  }
});

window.addEventListener("load", () => {
  navbar.classList.remove("active");
  body.classList.remove("active");
});
