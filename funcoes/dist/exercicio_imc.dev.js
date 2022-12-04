"use strict";

function calc_Imc(peso, alt) {
  if (peso == undefined || alt == undefined) {
    throw Error("Numero não definido");
  }

  return peso / (alt * 2);
}

function classifica_Imc(imc) {
  if (imc < 16.9) {
    return "muito abaixo do peso";
  } else if (imc < 18.4) {
    return "abaixo do peso";
  } else if (imc < 24.9) {
    return "no peso ideal";
  } else if (imc < 29.9) {
    return "acima do peso";
  } else if (imc < 34.9) {
    return "Com obesidade";
  } else if (imc < 40) {
    return "muito obeso";
  } else {
    return "Com obesidade extrema";
  }
}

var imc = calc_Imc(60, 1.74);
console.log("Você esta " + classifica_Imc(imc) + " com o IMC de: " + imc);