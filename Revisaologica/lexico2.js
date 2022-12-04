let x = 10
x = "uma string"
console.log(x)

let msg = "uma \"string"
console.log(msg)

console.log("3" * 2) /* javascript converte a string 3 em numero */

function teste(){
    console.log(this)
}
const teste2 = () => {
    console.log("teste2")
    console.log(this)
}
teste()

const obj = {
    n: 0,
    teste, //se a propriedade e valor do msm nome da pra se fazer isso
    teste2
}
obj.teste2()