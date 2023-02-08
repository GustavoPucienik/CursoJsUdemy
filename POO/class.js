//prototype

function Animal(tipo){
    if(this instanceof Animal){
    if(tipo) this.tipo = tipo
    } else{
        throw new Error("Animal precisa ser criado com operador new")
    }
}


function Cachorro(nome){
    this.nome = nome
    Animal.call(this, "Mamifero")
    this.constructor = Cachorro
}

Cachorro.prototype = new Animal("Mamifero")
Cachorro.prototype.constructor = Cachorro

let dog = new Cachorro("Dog")

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

class GatoC extends AnimalC {
    constructor(nome){
        super("mamifero")
        this.nome = nome
    }
}

    AnimalC.prototype.tipo = "Desconhecido"

let animal = new AnimalC("anfibio")
let sapo = new AnimalC()

let mingau = new GatoC("Mingau")

//console.log(animal)
//console.log(cat)
//console.log(typeof animal)
//console.log(typeof cat)
//console.log(Animal)
//console.log(AnimalC)
//console.log(Animal.prototype)
//console.log(AnimalC.prototype)
console.log(mingau.constructor)
console.log(dog.constructor)
