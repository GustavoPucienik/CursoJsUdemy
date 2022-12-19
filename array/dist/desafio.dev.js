"use strict";

function sum() {
  //const numbers = Array.from(arguments)
  var numbers = Array.prototype.slice.call(arguments);
  return numbers.reduce(function (sum, atual) {
    return sum + atual;
  }, 0);
}

function average() {
  return sum.apply(void 0, arguments) / arguments.length;
}

var soma = sum(1, 2, 3, 4, 5);
console.log(soma);
var media = average(1, 2, 3, 4, 5);
console.log(media);