if(!String.prototype.replaceAll){
    String.prototype.replaceAll = function(busca, troca){
        if(!(busca instanceof RegExp || typeof busca === "string")){
            throw Error("First parameter must be a string")
        }
        if(!(troca instanceof RegExp || typeof troca === "string")){
            throw Error("Second parameter must be a string")
        }
        return this.valueOf().split(busca).join(troca)
    }
}