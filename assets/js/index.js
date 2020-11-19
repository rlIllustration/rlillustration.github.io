/*
 *   Custom Scripts
 */

// Mobile Navbar script
// Expand / Collapse the navbar height

(function() {

    // Set up mobile navigation functionality
    var toggleOpen = window.document.getElementById("navToggleOpen");
    var toggleClose = window.document.getElementById("navToggleClose");
    var navBar = window.document.getElementById("navigation");
    var yearContainer = window.document.getElementById("yearContainer");

    toggleOpen.addEventListener("click", function() {
        navBar.classList.add("open");
    });

    toggleClose.addEventListener("click", function closeNavMenu() {
        navBar.classList.remove("open");
    });


    // Add current year to footer
    var currentDate = new Date();
    yearContainer.textContent = currentDate.getFullYear();

})(window);