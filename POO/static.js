//ES 5

function Animal(){}

Animal.prototype.whoAmI = function(){
    return this
}

Animal.categoria = "ser vivo"

const dog = new Animal()

//ES 6
class Cachorro {
    constructor(nome){
        this.nome = nome
        Cachorro.beber()  //da pra chamar um metodo utilizando o nome da classe
    }
    static comer(){
        console.log(this) // o this se torna a class Cachorro
        console.log("Comendo")
        this.beber()    //da pra chamar outros metodos estaticos nos metodos estaticos pelo this
    }

    static beber(){
        console.log("Bebendo")  
    }
}

const dog2 = new Cachorro("rex")
