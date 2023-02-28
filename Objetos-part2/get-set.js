let tipo = ""
//const tiposPermitidos = {"mamiferos": true , "anfibio": true, "reptil": true}
const tiposPermitidos = ["mamiferos", "anfibio","reptil"]

const cachorro = {
    Name: "Rex",
    get tipo(){
        return tipo
    },
    set tipo(_tipo){
        if(tiposPermitidos.indexOf(_tipo) >= 0){
            tipo = _tipo
        }
    }
}


//IIFE para evitar sujar escopo global
;(function(){
    let tipo = ""
    //const tiposPermitidos = {"mamiferos": true , "anfibio": true, "reptil": true}
    const tiposPermitidos = ["mamiferos", "anfibio","reptil"]

    const gato = {
        Name: "Mingal",
        get tipo(){
            return tipo
        },
        set tipo(_tipo){
            if(tiposPermitidos.indexOf(_tipo) >= 0){
                tipo = _tipo
            }
        }
    }
    //window.gato = gato
    this.gato = gato
})()
