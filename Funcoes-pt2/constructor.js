function Cachorro(name){
    this.name = name
    console.log(this)
    this.latir = function(){
        return console.log(this.name, "esta latindo")
    }

    this.andar = function (distancia){
        let posicao = 0
        posicao += distancia
            console.log(`${this.name} andou ${distancia} metros,
a posição atual é ${posicao} metros`)
    }
}

const rex = new Cachorro("Rex")

const toto = new Cachorro("Toto")

console.log(rex)

rex.latir()
rex.andar(5)
rex.andar(10)

toto.andar(3)

const laica = new Cachorro("Laica")
laica.latir()
laica.andar(2)
