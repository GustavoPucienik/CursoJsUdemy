"use strict";

/*
replace(),       replaceAll()
indexOf(),       lastIndexOf(),      includes(),
slice(),         substring()         split(),
toLowerCase,     toUpperCase(),
valueOf(),
trim(),          trimEnd(),          trimStart(),
padStart(),      padEnd(),
startsWith(),    endsWith(),
charAt,          charCode(),       e  length
*/
var str1 = "Minha string bacanuda"; //console.log(str1.replace("i","e"))
//console.log(str1.replace(/i/g, "e"))
//console.log(str1.replaceAll("i","e"))
//console.log(str1.indexOf("i"))
//console.log(str1.indexOf("i") >= 0) //retorna boolean
//console.log(str1.lastIndexOf("i"))
//console.log(str1.includes("i")) //se tem retorna boolean
//console.log(str1.slice(0, 6)) não da pra colocar do maior pro menor
//console.log(str1.slice(-15))//nao da pra colocar 0, coloca só 1 numero
//console.log(str1.slice(-15, -9))
//console.log(str1.substring(6,12))
//console.log(str1.substring(16, 6))// substring da pra colocar do maior para o menor
//console.log(str1.toUpperCase())
//console.log(str1.toLowerCase())

var strAsObj = new String("Minha nova string como objeto");
console.log(strAsObj);
console.log(strAsObj.valueOf()); //toString()funciona igual para strings

str1 = "    " + str1 + "      ";
/*  console.log(str1)
console.log(str1.trim())
console.log(str1.trimEnd())
console.log(str1.trimStart()) */

str1 = "0123456789";
console.log(str1.padStart(20));
console.log(str1.padStart(20, "-"));
console.log(str1.padEnd(20, "-"));
console.log(str1);
var telefone = "99860-3050";
var telefone0 = "9860-3050";

function mascara(num) {
  var hifenPosi = num.indexOf("-");
  var numInicio = num.slice(0, hifenPosi);
  var numFim = num.slice(hifenPosi + 1);
  var doisUltNum = numFim.slice(-2);
  return "".concat(numInicio[0].padEnd(numInicio.length, "*"), "-").concat(doisUltNum.padStart(numFim.length, "*"));
} //console.log(mascara(telefone0))
//console.log("----")


var str2 = "Hoje é sabado"; //console.log(str2.startsWith("Ho", 0))
//console.log(str2.startsWith("j", 2))
//console.log(str2.endsWith("do"))
//console.log("----")

var str3 = "CABCDEFGH"; //console.log(str3.charAt(1)), console.log(str3[2])
//console.log(str3.charCodeAt(0)),console.log(str3.charCodeAt(3))
//console.log(str3.charCodeAt(2))