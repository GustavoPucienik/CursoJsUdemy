"use strict";

var arr = [1, 2, 3, 4]; //console.log(`A array : ${arr} c/metodo reverse() vira : ${arr.reverse()}`)

console.log("");
var j = 0;
var soma = arr.reduce(function (acumulador, atual, i, _arr) {
  console.log("Indice: ".concat(i));
  console.log("Jota: ".concat(j++));
  console.log("array: ".concat(_arr));
  console.log("");
  return acumulador + atual;
}, 0);
console.log(soma);
console.log(arr);
console.log("");
var names = ["Gustavo", "Maria Ivonete", "Joana", "José"];
var namesInOrder = names.reduce(function (namesAcu, namesAtu) {
  var firstLetter = namesAtu[0];
  names[firstLetter] ? names[firstLetter]++ : names[firstLetter] = 1;
  return names;
}, {});
console.log(namesInOrder);
console.log("-------");