"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(function () {
  window.addEventListener("scroll", positionImage);

  var containerParalax = _toConsumableArray(document.querySelectorAll("[data-paralax]"));

  function isGettingOut(container) {
    return container.getBoundingClientRect().top <= 0;
  }

  function getNewPosition(c) {
    var v = parseFloat(c.getAttribute("data-p-velocity") || .5);
    return c.getBoundingClientRect().top * v * -1;
  }

  function positionImage() {
    containerParalax.forEach(function (c) {
      var origPositionY = getComputedStyle(c).backgroundPositionY;
      var origPositionX = getComputedStyle(c).backgroundPositionX;
      console.log(origPositionX, origPositionY);

      if (isGettingOut(c)) {
        c.style.backgroundPosition = "".concat(origPositionX, " ").concat(getNewPosition(c), "px ");
      } else {
        c.style.backgroundPosition = "".concat(origPositionY, " 0px ");
      }
    });
  }

  positionImage();
})();