"use strict";
var file = {};
file.includeHTML = function (cb) {
  var elements = document.querySelectorAll("[file-include-html]");
  var elementCount = elements.length;

  if (elementCount === 0 && cb) {
    cb();
    return;
  }

  var loadCount = 0;

  elements.forEach(function (element) {
    var filePath = element.getAttribute("file-include-html");
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          element.innerHTML = this.responseText;
        } else if (this.status == 404) {
          element.innerHTML = "Page not found.";
        }

        element.removeAttribute("file-include-html");
        loadCount++;

        if (loadCount === elementCount && cb) {
          cb(); // Call the callback after all elements are loaded
        }
      }
    };

    xhttp.open("GET", filePath, true);
    xhttp.send();
  });
};

// Example usage:
file.includeHTML(function () {
  // Callback function to be executed after includes are loaded
});
