var name = "Gustavo"
let name2 = "Gustavo2"//let e const não criam propriedades no objeto global

function teste (str, n){
    console.log(this.name)
    //console.log(this.name2)
    console.log(str, n)
}

teste.call({name: "Maria"}, "String", 20)
teste.apply({name: "João"}, ["Da Silva", 28])
teste.call({name: "João"}, ...["De Silva", 29])//usando o spread operator

const teste2 = teste.bind({name: "Gustavo"})
teste2("Gomes", 20)
teste("manuela", 30)//node this retorna undefined mas no browser retorna o ultimo name que no caso foi gustavo

document.addEventListener("click", teste2)
