let arr = [1, 2, 3, 4]

//console.log(`A array : ${arr} c/metodo reverse() vira : ${arr.reverse()}`)
console.log("")    

let j = 0
let soma = arr.reduce(function(acumulador, atual, i, _arr){
    console.log(`Indice: ${i}`)
    console.log(`Jota: ${j++}`)   
    console.log(`array: ${_arr}`)  
    console.log("")  
    return acumulador + atual
},0)

console.log(soma)
console.log(arr)
console.log("")  

const names = ["Gustavo", "Maria Ivonete", "Joana", "José"]
let namesInOrder = names.reduce(function(namesAcu, namesAtu){
    let firstLetter = namesAtu[0]
    names[firstLetter] ? names[firstLetter]++ : names[firstLetter] = 1
    return names
}, {})
console.log(namesInOrder)
console.log("-------") 

