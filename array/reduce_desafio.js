const arrNum = [1, 2, 3, 4, 1, 3]

const numUnico = arrNum.reduce(function(numUnico, numAtual){
    if(numUnico.indexOf(numAtual) < 0){
        numUnico.push(numAtual)
    } return numUnico 
},[])

console.log(numUnico)