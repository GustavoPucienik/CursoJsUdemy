(function(){ 
    function calc_media(){
        let total = 0
        let qtd = arguments.length
        for(let i = 0; i < qtd; i++){
            if(typeof arguments[i] !== "number"){
                throw Error("apenas numeros")
            }
            total += arguments[i]
        }
        return (total / qtd) || 0
    }
    let media = calc_media(7, 8)
    console.log(media)
})()