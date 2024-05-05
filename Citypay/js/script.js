const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("mouseover", () => {
  nav.classList.toggle("active");
  // menuToggle.classList.toggle("active");
});

nav.addEventListener("mouseout", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});
