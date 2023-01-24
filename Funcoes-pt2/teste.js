
function teste(str){
    console.log(this)
    console.log(str)
}

const obj = {
    foo: "bar",
    teste,
    name: "gus"
}

obj.teste("parametro?")

const obj2 = {
    nome: "laranja",
    teste//se n passar a function teste da erro
}

obj2.teste("parametro?")
