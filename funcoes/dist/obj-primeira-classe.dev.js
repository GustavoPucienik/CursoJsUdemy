"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function fn(cb) {
  console.log("executar ação de callback");
  console.log(_typeof(cb));
  typeof cb === "function" && cb();
}

function callback() {
  console.log("função passada por parametro");
}

fn(callback);
var obj = {
  callback: callback
};
obj.callback();

function fn2(n1) {
  return function (n2) {
    return n1 * n2;
  };
}

var funcao2 = fn2(10);
var mult = funcao2(2);
console.log(mult);

function fn3() {
  fn3.count++;
  return function _fn3() {
    console.log("funcao retornada por parametro");
  };
}

fn3.count = 0;
var funcao3 = fn3();
var funcao3a = fn3();
var funcao3b = fn3();
funcao3();
console.log(fn3.count);