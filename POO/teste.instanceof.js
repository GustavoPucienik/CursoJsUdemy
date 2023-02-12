n = 10
nObj = new Number(10)
console.log(n instanceof Number)
console.log(nObj instanceof Number)

console.log(n.contructor)
console.log(nObj.contructor)

const arr1 = []
const arr2 = new Array()


console.log(`----------`)
console.log(arr1 instanceof Array)
console.log(arr2 instanceof Array)


console.log(`----------`)

const regex1 = /a/g
const regex2 = new RegExp()
console.log(regex1 instanceof RegExp)
console.log(regex2 instanceof RegExp)

console.log(typeof function (){})
const fn = () => {}
console.log(typeof fn)
