"use strict";

var teste = function teste(cb) {
  console.log("funcao teste");
  console.log(cb);
  typeof cb === "function" && cb(30);
};

var fn = function fn(param) {
  console.log("funcao anonima de callback");
  console.log(param);
};

teste(fn);
console.log("--------");
teste("oi", fn(1));
console.log("--------");