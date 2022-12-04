"use strict";

// criar array com numeros aleatorios não repetidos
function generateRandomInteger(max) {
  return parseInt(Math.random() * max);
}

var arr = [];
var i = 0;

while (arr.length <= 20) {
  i++;
  var randomNumber = generateRandomInteger(30);

  if (arr.indexOf(randomNumber) < 0) {
    arr.push(randomNumber);
  } else {
    console.log(randomNumber, "já existe no arr ");
  }
}

console.log(arr);
console.log("O loop foi executado", i, "vezes");