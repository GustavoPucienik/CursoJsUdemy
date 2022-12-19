"use strict";

var arr = [1, 2, 3];
var arr2 = [4, 5, 6];

function sum() {
  console.log(arguments);
  console.log(arguments.length);
}

sum(1, 2, 3);
sum(arr, arr2);
sum([1, 2, 3]);
sum.apply(void 0, [1, 2, 3]);
sum.apply(void 0, arr);
console.log("");
arr.push.apply(arr, arr2);
console.log(arr);