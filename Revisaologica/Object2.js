const pessoa = {
    nome: "Maria",
    idade: 28,
    "email": "Dev@gmail.com" //a propriedade pode estar entre aspas
}
console.log(pessoa)

for(let prop in  pessoa){
    console.log(prop)
    console.log(pessoa[prop])
}