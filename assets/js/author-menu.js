document.addEventListener('DOMContentLoaded', () => {
  const booksLink = document.getElementById('books');
  const booksSubmenu = document.querySelector('.books-submenu');
  const submenuLinks = document.querySelectorAll('.books-submenu a');

  // Toggle submenu visibility on mobile when Books is clicked
  booksLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    booksSubmenu
      .classList
      .toggle('active'); // Toggle submenu visibility
  });

  // Close submenu and navigate when a submenu link is clicked
  submenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      booksSubmenu
        .classList
        .remove('active'); // Close submenu
    });
  });

  // Close submenu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
      booksSubmenu
        .classList
        .remove('active');
    }
  });
});
