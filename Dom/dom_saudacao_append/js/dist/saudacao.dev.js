"use strict";

(function () {
  var nameUser = "Gustavo";

  if (nameUser) {
    var topBarElement = document.createElement("div");
    topBarElement.className = "top-bar";
    topBarElement.innerHTML = "<p> Ol\xE1, <b>".concat(nameUser, "</b> </p>"); //elementpai.insertBefore(novoelemento, elementoreferencia)

    var elementpai = document.querySelector(".hero");
    elementpai.insertBefore(topBarElement, elementpai.firstElementChild);
  }
})();