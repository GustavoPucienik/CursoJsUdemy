//deepfreeze
const obj1 = {
    foo: "bar",
    internalProp: {}
}
Object.freeze(obj1)
Object.freeze(obj1.internalProp)//congelando objeto interno
obj1.foo = "alterado"
console.log(obj1)

obj1.internalProp.foo = "bar 2"
console.log(obj1)

obj1.internalProp = { teste: "teste"}

function deepFreeze(obj1){
    const propNames = Object.getOwnPropertyNames(obj1)

    propNames.forEach(name => {
        let prop = obj1[name]
        if(typeof prop === "object" && prop !== null){
            deepFreeze(prop)
        }
    })

    return Object.freeze(obj1)
}

const obj2 = {
    foo: "bar",
    internalProp: {
        array: [1,2,3],
        internalObject:{teste:"teste"}
    }
}
deepFreeze(obj2)
console.log("---")
obj2.foo = "alterado"
//obj2.internalProp.array.push("alterado") //error
console.log(obj2) 