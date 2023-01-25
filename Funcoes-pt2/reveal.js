let calcRevealPattern = (function (){
    let n = 0

    function checkNum(n){
        if(typeof n !== "number"){
            throw Error("precisa de numero")
        }
    }

    function somar(_n){
        checkNum(_n)
        n += _n
        return this
    }
    function subtrair(_n){
        checkNum(_n)
        n -= _n
        return this
    }
    function log(){
        console.log(n)
        return this
    }
    return{
        somar, subtrair, log
    }
})()

calcRevealPattern.somar(5).somar(10)
calcRevealPattern.log()
