"use strict";

var _this = void 0;

var x = 10;
x = "uma string";
console.log(x);
var msg = "uma \"string";
console.log(msg);
console.log("3" * 2);
/* javascript converte a string 3 em numero */

function teste() {
  console.log(this);
}

var teste2 = function teste2() {
  console.log("teste2");
  console.log(_this);
};

teste();
var obj = {
  n: 0,
  teste: teste,
  //se a propriedade e valor do msm nome da pra se fazer isso
  teste2: teste2
};
obj.teste2();