"use strict";

var arr = [1, 5, 10, "ola", true];
var sohNumeros = arr.some(function (el) {
  return typeof ele === "number" && ele > 20;
});
var arr1 = arr.filter(function (el, i, _arr) {
  return typeof el === "number";
});
arr.forEach(function (el, i, _arr) {
  console.log(i + " : " + el);
});
var arr2 = arr1.map(function (el, i, arr) {
  return el * el;
});
console.log(arr);
console.log(arr1);
console.log(arr2);