/*
Desafio 
crie um objeto pessoa.
Deve ter uma propriedade get chamada usuarios que deve armazenar uma array de strings
Deve ter uma propriedade get chamada usuario que deve retornar o ultimo usuario da array
Sempre q alterar o usuario(set), não deve substituir, mas sim colocar em um array, se ja não existir na array de usuarios
Deve ter uma propriedade get usuarios para recuperar o historico de usuario
*/

//se o obj pessoas for colocado em uma variavel é possivel utilizar os metodos de array

;(function(){
    let usuarios = []
    this.pessoas = {
        get usuario(){
            if(usuarios.length){
                return usuarios[usuarios.length - 1]
            }
        },
        set usuario(_usuario){
            if(usuarios.indexOf(_usuario) < 0){
                usuarios.push(_usuario)
            }
        },
        get usuarios(){ //Se retornar usuarios ele retorna a array alocada no mesmo espaço da memoria,
            return [...usuarios] //Mas se colocar um spred operator você consegue impedir isso para que não removam a array com um metodo de array
        }
    }
})()
