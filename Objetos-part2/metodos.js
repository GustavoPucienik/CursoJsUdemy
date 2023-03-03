const pai = {
    nome: "pai",
    falar: function(msg){
        console.log(`${this.nome} esta falando.`)
    } 
}

const filho = Object.create(pai, {nome: {value :"filho", enumerable:true}})

const obj1 = {
    a: "a",
    b: "b",
    c: "c"
}

const obj2 = {
    b:"b2",
    d:"d2"
}
/* Object.defineProperty(obj2, "naoEnumeravel",{
    value: "naoEnumeravel"
}) */
Object.defineProperties(obj2, {
    naoEnumeravel: {
        value:"nao enumeravel"
    },
    enumeravel:{
        value: "enumeravel",
        enumerable: true
    }
})

const filha = Object.assign({}, obj1, filho)//filha n tem d:"d" mas obj1 sim
//const clone = Object.assign( obj2, obj1)
const obj5 = Object.assign({}, obj2) //com assign não vai levar as propriedades não enumeravei e não vai levar quando usar o spread operator
console.log(obj5)

obj2.teste = "valor teste"

const obj3 = {...obj1, ...obj2}
const obj4 = {...obj2, ...obj1}

console.log(obj2)
console.log(Object.keys(obj2))
console.log(Object.values(obj2))
console.log(Object.entries(obj2))
