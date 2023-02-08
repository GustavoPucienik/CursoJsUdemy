// Factories

const CachorroProto = {
        latir() {
            console.log(this.name, "esta latindo")
        },
        andar(distancia){
            this.posicao = distancia
            console.log(this.name," andou ", distancia," metro")
        }
}

function criarCachorro(name){
    let posicao = 0

    const obj = {
        name,

        get posicao(){
            console.log(`A posição atual de ${this.name} é ${posicao}`)
            return posicao
        },

        set posicao(newPosition){
            console.log(`A nova posição de ${this.name} é ${this.posicao} `)
            posicao = newPosition
        }
    }

    Object.setPrototypeOf(obj, CachorroProto) //Toda vez que eu chamar a funçao criar cachorro cria um outro objeto o prototype de dog1 não é o mesmo de dog2

    return obj
}

let dog1 = criarCachorro("dog1")
let dog2 = criarCachorro("dog2")


//prototype

function Animal(tipo){
    if(this instanceof Animal){
    if(tipo) this.tipo = tipo
    } else{
        throw new Error("Animal precisa ser criado com operador new")
    }
}


function Cachorro(name){
    this.name = name
    Animal.call(this, "Mamifero")
    this.constructor = Cachorro
    this.comer = function(){
        console.log(`${this.name} esta comendo.`)
    }
}

Cachorro.prototype = new Animal("Mamifero")
Cachorro.prototype.constructor = Cachorro
Cachorro.prototype.latir = function(){
    console.log(`${this.name} esta latindo.`)
}

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
    constructor(name){
        super("mamifero")
        this.name = name
        this.comer = function () {
            console.log(`${this.name} esta comendo`)
        }
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
//console.log(mingau.constructor)
//console.log(dog)
