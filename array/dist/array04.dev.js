"use strict";

var arr1 = ["a", "b", "c"];
var arr2 = [].concat(arr1);
arr2[arr2.length] = "novo valor";
console.log(arr1);
console.log(arr2);