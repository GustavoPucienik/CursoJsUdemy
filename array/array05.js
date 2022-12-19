let arr = [1, 2, 3, 4, 5]
let teste = arr.push(11, 13, true, "ola mundo")
console.log(teste)
console.log(arr)
console.log("")

let ultimoItem = arr.pop()
//let ultimoItem = arr[arr.length - 1]
console.log(ultimoItem)
console.log(arr)
console.log("")

let primeiroItem = arr.shift()
console.log(primeiroItem)
console.log(arr)

teste = arr.unshift(4, 5, 6)
console.log(teste)
console.log(arr)
console.log("")

let arr2
console.log(`antes do slice (2,4) ${arr}`)
arr2 = arr.slice(2, 4)
console.log(`.slice ${arr2}`)

console.log(`antes do splice(2,4) ${arr}`)
let arr3 = arr.splice(2, 4, "ola")
console.log(` depois ${arr}`)
console.log(`os numeros removidos ${arr3} `)