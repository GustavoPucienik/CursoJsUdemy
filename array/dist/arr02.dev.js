"use strict";

var arr = [4, 5, 10, 20, 35, 4, 5];
console.log(arr);
console.log("indexOf: " + arr.indexOf(10));
console.log("lastIndexOf: " + arr.lastIndexOf(5));
console.log("includes, de 10 boo é: " + arr.includes(10));
console.log(".find(function(el){el>10}) acha " + arr.find(function (el) {
  return el > 10;
}));
console.log(arr.findIndex(function (el) {
  return el > 10;
}));