document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }

  const popup = document.getElementById("popup");
  const error = document.getElementById("error");

  function openPopup() {
    popup.classList.add("open-popup");
  }

  function closePopup() {
    popup.classList.remove("open-popup");
  }

  function openError() {
    error.classList.add("open-error");
  }

  function closeError() {
    error.classList.remove("open-error");
  }

  document.getElementById("deletion_request_form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(this);

    // Send AJAX request
    fetch('./submit_deletion_request.php', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json()) // Parse JSON response
      .then(data => {
        if (data.message === "Success") { // Check for successful response
          openPopup(); // Open popup on success
          this.reset(); // Clear form (optional)
        } else if (data.message === "Error") { // Check for wrong response
          openError(); // Open error on same credentials
        }
      })
      .catch(error => {
        console.error(error);
        // Handle errors (optional - display error message)
      });
  });

  window.openPopup = openPopup;
  window.closePopup = closePopup;
  window.openError = openError;
  window.closeError = closeError;
});
