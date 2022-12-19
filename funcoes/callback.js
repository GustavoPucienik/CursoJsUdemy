const teste = function(cb){
    console.log("funcao teste")
    console.log(cb)
    typeof cb === "function" && cb(30)
}

const fn = function(param){
    console.log("funcao anonima de callback")
    console.log(param)
}
teste(fn)
console.log("--------")
teste("oi",fn(1))
console.log("--------")

