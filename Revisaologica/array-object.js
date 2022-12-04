const pessoas = [ {
    nome: "Daniel",
    idade: 40
}, {
    nome: "Maria",
    idade: 30
}, {
    nome: "Gustavo",
    idade: 20
}, {
    nome: "Ana",
    idade: 15
}]
for(let i = 0; i < pessoas.length; i++){
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}