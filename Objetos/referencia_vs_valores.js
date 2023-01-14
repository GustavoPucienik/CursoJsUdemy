let x = [10]
let y = {n: 10};

function mudaX(x){
    x.push(11)
    console.log(x)
}

function mudaY(obj){
    obj.n++
}

mudaX(x)
console.log(y)

mudaY(y)
console.log(y)