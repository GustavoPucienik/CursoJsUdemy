"use strict";

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
console.log("arr1: ".concat(arr1, " e arr2: ").concat(arr2));
console.log("");
console.log("arr.toString() \xE9 ".concat(arr1.toString()));
console.log("");
console.log("arr.join(\"-\") \xE9 ".concat(arr1.join(" - ")));
console.log("");
var arr3 = arr1.concat(arr2);
console.log("");
console.log("arr1.concat(arr2) fica: ".concat(arr3));