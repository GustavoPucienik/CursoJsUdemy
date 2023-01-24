//console.log(teste(".")) //da pra chamar a function expression antes dela ser declarada.
//console.log(testeArrow(".")) //mas a arrow function não

function teste(str){
    console.log("function expression", str)
    return "return fn expression" + str
}

/* let t1 = teste(" parametro fn express")
console.log(t1) */

/* const testeArrow = str => { ////se tiver apenas um parametro não precisa de ()
    console.log("arrow function", str)
    return "return arrow fn" + str
} */
const testeArrow = (str, n) => console.log(`arrow function - ${str} - ${n}`) 
let t1 = testeArrow("parametro arrow fn", "n: 10")

/* const testeArrow2 = () => {
    console.log("teste Arrow 2 chamado")
    return {
        foo: "bar"
    }
} */

const testeArrow2 = () => {return {foo: "bar"}}

const t2 = testeArrow2()
console.log(t2)
console.log(t2.foo)
console.log(t2["foo"])