//Header efecct
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("stick-op", window.scrollY > 150);
  nav.classList.toggle("stick", window.scrollY > 500);
});
