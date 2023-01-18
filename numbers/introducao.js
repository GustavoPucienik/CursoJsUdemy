let numeros = 1234567.890
let x = 5
let y = 8

console.log(numeros.toFixed(x))//retorna 0 a mais nos numeros que n tem x digitos
console.log(typeof numeros.toFixed(x))//cada numero tem que ter pelo menos x digitos

console.log(numeros.toPrecision(7)) //numero de digitos que eu quero em um numero
console.log(typeof numeros.toPrecision(7))// se faltar ele acrescenta 0

console.log(numeros.toExponential(y))//converte numero em notação cientifica com y casas 
                                    //decimais