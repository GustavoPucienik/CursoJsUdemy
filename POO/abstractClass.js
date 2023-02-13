
class Animal {
    constructor(tipo){

        if(this.constructor === Animal){
            throw new Error("Animal é uma classe abstrata")
        }
        if(tipo){
            this.tipo = tipo
        }
    }
    comer(){
        throw new Error("Method 'comer()' precisa ser implementada ")
    }
}

class Gato extends Animal{
    constructor(nome){
        super("mamifero")
        this.nome = nome
    }
    comer(){
        console.log(`${this.nome} está comendo`)
    }
}

const animal = new Animal("mamifero") //constructor é chamado sempre que vc utiliza o operador new

const mingau = new Gato("mingau")
