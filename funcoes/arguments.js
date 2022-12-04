const somar = function(){     /* arguments não tem definição in arrow function*/
    console.log(arguments)
    let total = 0
    for(let i = 0; i < arguments; i++){
        total += arguments[i]
    }
    return total
}
console.log(somar.name)    /* .name é a propriedade que mostra o nome */
console.log(1, 2, 3)
console.log(1, 2, 3, 4, 5)
