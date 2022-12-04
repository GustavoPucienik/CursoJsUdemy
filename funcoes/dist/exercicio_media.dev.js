"use strict";

(function () {
  function calc_media() {
    var total = 0;
    var qtd = arguments.length;

    for (var i = 0; i < qtd; i++) {
      if (typeof arguments[i] !== "number") {
        throw Error("apenas numeros");
      }

      total += arguments[i];
    }

    return total / qtd || 0;
  }

  var media = calc_media(7, 8);
  console.log(media);
})();