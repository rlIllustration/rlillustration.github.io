/*
 * Mobile Navbar script
 * Expand / Collapse the navbar height
 */

(function () {
  // Set up mobile navigation functionality
  var toggleOpen = window.document.getElementById("navToggleOpen");
  var toggleClose = window.document.getElementById("navToggleClose");
  var navBar = window.document.getElementById("navigation");

  toggleOpen.addEventListener("click", function () {
    navBar.classList.add("open");
  });

  toggleClose.addEventListener("click", function closeNavMenu() {
    navBar.classList.remove("open");
  });

})(window);
