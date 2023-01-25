function criarCachorro(name){
    let posicao = 0
    return{
            name,
            latir(){
                return console.log(this.name, "está latindo")
            },
            andar(distancia){
                posicao += distancia
                if(distancia >= 1){
                    return console.log(this.name, `Andou ${distancia} metros`)
                }
                else if(distancia == 0){
                    return console.log(this.name, "não saiu do lugar")
                }
                 else{
                    return console.log(this.name, `Voltou para trás ${distancia * -1} metros`)
                }
                
            },
            pegaposicao(){
                console.log(`${this.name} esta a ${posicao} metros da própria posição inicial`)
                return posicao
            }
    }
}

const rex = criarCachorro("Rex")
rex.andar(5)
rex.andar(-1)
rex.pegaposicao()

const toto = criarCachorro("Totó")
console.log(`-------------`)
toto.latir()
toto.andar(3)
toto.andar(0)
toto.latir()
toto.andar(-15)
toto.pegaposicao()
