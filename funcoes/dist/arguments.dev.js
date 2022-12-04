"use strict";

var somar = function somar() {
  /* arguments não tem definição in arrow function*/
  console.log(arguments);
  var total = 0;

  for (var i = 0; i < arguments; i++) {
    total += arguments[i];
  }

  return total;
};

console.log(somar.name);
/* .name é a propriedade que mostra o nome */

console.log(1, 2, 3);
console.log(1, 2, 3, 4, 5);