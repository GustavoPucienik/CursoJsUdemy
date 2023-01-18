let numeros = 1234567.890
let x = 5
let y = 8

console.log(numeros.toFixed(x))//retorna 0 a mais nos numeros que n tem x digitos
console.log(typeof numeros.toFixed(x))//cada numero tem que ter pelo menos x digitos

console.log(numeros.toPrecision(7)) //numero de digitos que eu quero em um numero, se faltar
console.log(typeof numeros.toPrecision(7))// ele acrescenta 0, se for grande demais vira notação cientifica

console.log(numeros.toExponential(y))//converte numero em notação cientifica com y casas 
                                    //decimais

console.log(" - - - - - - - - - - ")

console.log("0: " + (0).toString(2))// converte para binario
console.log("1: " + (1).toString(2))
console.log("2: " + (2).toString(2))
console.log("3: " + (3).toString(2))
console.log("4: " + (4).toString(2))
console.log("5: " + (5).toString(2))
console.log("6: " + (6).toString(2))


console.log(" - - - - - - - - - - ")
//numeros hexadecimais
//10 = a, 11 = b, 12 = c... 15 = f

console.log((15).toString(16))
console.log((16).toString(16))
console.log((17).toString(16))
console.log((25).toString(16))
console.log((26).toString(16))
console.log((27).toString(16))

console.log(numeros.toLocaleString("en-us"))
console.log(numeros.toLocaleString("pt-br"))// se eu usar apenas um pt-br, pt-br se tornara default
console.log(numeros.toLocaleString("pt-br", {style: "currency", currency: "BRL"}))
// nunca armazenar o numero formatado como string no seu banco de dados,
//somente para apresentar ao usuario

console.log(" - - - - - - - - - - ")

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(isFinite("2"))// retorna um boolean true se for numero


let numAsString = "a3.456"//
let tring = "3.456a"
console.log(isNaN(numAsString),numAsString,parseFloat(numAsString))//retorna um bollean dependendo se for NaN ou não
console.log(isNaN(tring),tring,parseFloat(tring))
