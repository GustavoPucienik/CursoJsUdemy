const pessoa = {
    nome: "Gustavo"
}
console.log(Object.getOwnPropertyDescriptor(pessoa, "nome"))

Object.defineProperty(pessoa, "sobrenome", {//se usar o defineProperty o valores de configurable, enumerate e writable é false
    value: "Gomes Pucienik",
    enumerable: true
})

Object.defineProperties(pessoa, {
    prop1: {
        value: "prop1",
        writable: true
    },
    prop2: {
        value: "prop2",
        writable: false,
        value: 10
    }
})

console.log(Object.getOwnPropertyDescriptor(pessoa, "sobrenome"))
for(let prop in pessoa){
    console.log(prop)
}