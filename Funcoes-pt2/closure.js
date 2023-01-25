const teste = (function(n){
        //let n = 0 //se a variavel estiver do lado de fora da função, ela soma
    return function testeInterno(){//closure lembrar das variaveis ao redor dessa função no momento em que ela foi definida
        //se variavel n estiver sendo definida do lado de dentro da function testeInterno ela limpa os valores da variavel
        console.log("teste interno chamado", ++n)
        return "retorno de teste interno " + n
    }
})(0)//
let str1 = teste()
teste()
let str2 = teste()

console.log(teste())
console.log("-----")
console.log(str1)
console.log(str2)