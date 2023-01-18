let arr = [1, 2, 10, 4, 5]
let x = 3

console.log(Math.min(1, 2, 3, 4, 5))//retorna o menor numero
console.log(Math.max(1, 2, 3, 4, 5))//retorna o maior numero
console.log(Math.max(...arr))

console.log(Math.round(35.50))//arredonda o numero
console.log(Math.floor(9.99)) //arredonda pra baixo
console.log(Math.ceil(9.01))  //arredonda pra cima

console.log(Math.pow(2, 3))//2 ao cubo primeiro valor é o numero e segundo é parametro

console.log(Math.sqrt(49))//Mostra a raiz quadrada
console.log(Math.cbrt(27))//Retorna a raiz cubica

console.log(Math.random())//Retorna numero aleatorio de 0 a 0,9999999999
console.log(Math.random() * x) //retorna numero de 0 a x
console.log(Math.round(Math.random()))// para retornar 0 ou 1
