//essa expression tem acesso as variaveis dela mesmo e as variaveis de fora
const str = "variavel global"

function teste(str){
    console.log(` this de teste `)
    console.log(this)
    console.log(str)


    setTimeout(() => {//
        console.log(` ------------------------------ `)
        console.log(this)//this no browser é objeto window //no node é Timeout
                        // mas se for arrow fn retorna o proprio obj no node e browser
    }, 2000)

}

const teste2 = () => {
    console.log("arrow function")
    console.log(this) //na arrowFn o this é um objeto vazio, tem a ver com exportação de modulos que sera visto mais para frente, mas no browser retorna o window
}

//console.log(teste())
//teste("parametro")

const obj = {
    foo: "bar",
    teste,
    teste2
}
obj.teste("parametro?")// como estou executando o this pelo obj, ent o this de dentro é o proprio obj

//obj.teste2()
