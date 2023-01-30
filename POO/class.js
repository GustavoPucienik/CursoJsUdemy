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

//ES6

class AnimalC{
    constructor(tipo){
    if(tipo){
        this.tipo = tipo
            }
    }
    obterTipo(){
        return this.tipo
    }
}

    AnimalC.prototype.tipo = "Desconhecido"

let animal = new AnimalC("anfibio")
let sapo = new AnimalC()

//console.log(animal)
//console.log(cat)
//console.log(typeof animal)
//console.log(typeof cat)
//console.log(Animal)
//console.log(AnimalC)
console.log(Animal.prototype)
console.log(AnimalC.prototype)


