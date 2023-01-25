//prototype

function Animal(tipo){
    if(tipo) this.tipo = tipo
}

let dog = new Animal("mamifero")
let cat = new Animal("mamifero")
let snake = new Animal("reptil")
let fish = new Animal()

let arr = [1, 2, 3]

Animal.prototype.obterTitulo = function(){
    this.tipo
}
Animal.prototype.tipo = "desconhecido"

Animal.constructor//.constructor mostra a função construtora