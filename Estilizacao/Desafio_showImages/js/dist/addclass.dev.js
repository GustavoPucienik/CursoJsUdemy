"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

;

(function () {
  var elements = _toConsumableArray(document.querySelectorAll("[data-addClass-on-scroll]"));

  window.addEventListener("scroll", addClassScroll);

  function isElementIntoView(el) {
    var rect = el.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom >= 0 || rect.top >= 0 && rect.bottom <= innerHeight;
  }

  function addClassScroll() {
    if (elements.length === 0) {
      window.removeEventListener("scroll", addClassScroll);
      console.log("evento removido");
    }

    elements.forEach(function (el) {
      if (isElementIntoView(el)) {
        var delay = parseInt(el.getAttribute("data-addclass-on-scroll-delay")) || 0;
        setTimeout(function () {
          var _class = el.getAttribute("data-addclass-on-scroll");

          el.classList.add(_class);
          el.removeAttribute("data-addclass-on-scroll");
          el.removeAttribute("data-addclass-on-scroll-delay");
          elements = _toConsumableArray(document.querySelectorAll("[data-addClass-on-scroll]"));
        }, delay);
      }
    });
  }

  addClassScroll();
})();