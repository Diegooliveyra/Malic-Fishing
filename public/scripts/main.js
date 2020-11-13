//Menu mobile
const $btnMenu = document.querySelector("#btn-menu");
const $menu = document.querySelector("#menu");
const $body = document.querySelector("body");

const links = document.querySelectorAll(".nav-menu a");
for (i = 0; i < links.length; i++) {
  links[i].onclick = activeMenu;
}

$btnMenu.addEventListener("click", activeMenu);

function activeMenu() {
  if (window.innerWidth < 768) {
    $menu.classList.toggle("active");
    $body.classList.toggle("noscrol");
  }
}


//Slide Hero
const slideInterval = 4000;

$slide = [...document.querySelectorAll('[data-js="slide"]')];
console.log($slide);

function moveForward() {
  for (var i = 0; $slide.length > i; i++) {
    if ($slide[i].className === "hero-slider hidden") {
      $slide[i].classList.remove("hidden");
    } else {
      $slide[i].classList.add("hidden");
    }
  }
  setTimeout(moveForward, slideInterval);
}

function startPlayback() {
  setTimeout(moveForward, slideInterval);
}

startPlayback();
