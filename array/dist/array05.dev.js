"use strict";

var arr = [1, 2, 3, 4, 5];
var teste = arr.push(11, 13, true, "ola mundo");
console.log(teste);
console.log(arr);
console.log("");
var ultimoItem = arr.pop(); //let ultimoItem = arr[arr.length - 1]

console.log(ultimoItem);
console.log(arr);
console.log("");
var primeiroItem = arr.shift();
console.log(primeiroItem);
console.log(arr);
teste = arr.unshift(4, 5, 6);
console.log(teste);
console.log(arr);
console.log("");
var arr2;
console.log("antes do slice (2,4) ".concat(arr));
arr2 = arr.slice(2, 4);
console.log(".slice ".concat(arr2));
console.log("antes do splice(2,4) ".concat(arr));
var arr3 = arr.splice(2, 4, "ola");
console.log(" depois ".concat(arr));
console.log("os numeros removidos ".concat(arr3, " "));