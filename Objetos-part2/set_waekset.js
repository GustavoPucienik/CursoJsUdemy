const _set = new Set()
const _weakset = new WeakSet()

const arr = [1,2,3,4,5]

_set.add(1)
_set.add(2)
_set.add(3)
_set.add(6)
console.log(_set)
console.log(_set.has(6))
_set.delete(6)
console.log(_set)

for(let el of _set){
    console.log(`${el}`)
}

for(let el of _set.keys()){
    console.log(`set.keys: ${el}`)
}
for(let el of _set.values()){
    console.log(`set.values: ${el}`)
}

;(function(){
    let obj1 = {foo: `bar1`}
    let obj2 = {foo: `bar2`}
    _set.add(obj1)
    _weakset.add(obj2)
})()

console.log(_set.size)
console.log(_weakset.has())

    ///[+]///

    const obj = { name: `oioi`}
    const set = new Set([100, {name: `oioioi`}, `helloooworld`, true, `helloword`, true, {name: `oioioi`}])
    console.log(set)