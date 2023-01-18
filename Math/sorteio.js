function getRamdomNumber(inicio = "", fim, integer){
    
    let r = Math.random() * (fim - inicio + 1) + inicio
    return integer == true ? parseInt(r) : r

}

console.log(getRamdomNumber(5, 10, true))
