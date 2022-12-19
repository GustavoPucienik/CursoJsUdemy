"use strict";

var arr = [1, 2, 3];
var obj = {
  nome: "maria",
  idade: "28",
  email: "maria@server.com"
};

for (var prop in obj) {
  console.log(prop);
  console.log(obj[prop]);
}

console.log("");

for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  n = _arr[_i];
  console.log(n);
}