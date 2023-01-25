//herança

function Animal(tipo){
    if(tipo) this.tipo = tipo
}
Animal.prototype.obterTitulo = function(){
    this.tipo
}

Animal.prototype.tipo = "desconhecido"

function Cachorro (nome, tipo){
    this.nome = nome
    Animal.call(this, tipo)
    this.constructor = Cachorro
}
Cachorro.prototype = new Animal()

let rex = new Cachorro("Rex", "Mamifero")
