/*
 * Copyright script
 */

(function () {
  // Add current year to footer
  var yearContainer = window.document.getElementById("yearContainer");
  var currentDate = new Date();
  yearContainer.textContent = currentDate.getFullYear();
})(window);