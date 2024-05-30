const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

function showDetail(role) {
  const details = document.querySelectorAll('.detail-grid');
  details.forEach(detail => {
    detail.classList.remove('active');
  });
  document.getElementById(role).classList.add('active');
}




document.addEventListener('DOMContentLoaded', () => {
  const navvItems = document.querySelectorAll('.navv li');
  const detailGrids = document.querySelectorAll('.detail-grid');

  navvItems.forEach(item => {
    item.addEventListener('click', () => {
      // Hide all detail grids
      detailGrids.forEach(grid => grid.style.display = 'none');

      // Get the role from the clicked nav item
      const role = item.getAttribute('data-role');

      // Show the corresponding detail grid
      const detailGrid = document.getElementById(role);
      if (detailGrid) {
        detailGrid.style.display = 'block';
      }

      // Show the details section
      document.querySelector('.details').style.display = 'block';
    });
  });
});

