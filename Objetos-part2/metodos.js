const pai = {
    nome: "pai",
    falar: function(msg){
        console.log(`${this.nome} esta falando.`)
    } 
}

const filho = Object.create(pai, {nome: {value :"filho"}})