const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const back = document.getElementById("back");



menuToggle.addEventListener("mouseover", () => {
  nav.classList.toggle("active");
  // menuToggle.classList.toggle("active");
});

nav.addEventListener("mouseout", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the buttons
  const gplayBtn = document.querySelector(".gplay-btn");
  const appstoreBtn = document.querySelector(".appstore-btn");

  // Add click event listeners to the buttons
  gplayBtn.addEventListener("click", function () {
    // Redirect to Google Play Store URL
    window.open('https://play.google.com/store/apps/details?id=com.ctxpress.citypay', '_blank');
  });

  appstoreBtn.addEventListener("click", function () {
    // Redirect to App Store URL
    window.open('https://apps.apple.com/nz/app/citypay-nepal/id1643110573', '_blank');
  });
});

