"use strict";

function alteraArray(a) {
  a.push("adicionado");
}

var arr = ["a"];
console.log(arr);
alteraArray(arr);
console.log(arr);

function alteraPrimitivo(p) {
  p += "adicionado";
}

var msg = "mensagem";
console.log(msg);
alteraPrimitivo(msg);
console.log(msg);