function latir(){
    console.log(this.name,"fala: au au")
}

function miar(){
    console.log(this.name,"fala: miau miau")
}

const dog = {
    name: "rex",
    falar: latir,
    falar2(){
        console.log("falar 2")
    }
}

const cat = {
    name: "mingau",
    falar () {
        console.log(this)
        miar.call(this)
    }
}

dog.falar()
dog.falar2()
cat.falar()