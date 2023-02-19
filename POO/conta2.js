//Desafio conta bancaria
/*  
   2. Criar duas classes que herdam de conta bancaria 
   - Conta corrente
   - Limite
   - Conta poupança
   - Aniversário
 */

class ContaBancaria{
    constructor(cliente, numero){  
        if(this.constructor === ContaBancaria){
        throw new Error("ContaBancaria é uma class abstrata")
        }

        this.cliente = cliente
        this.numero = numero
        this.saldo = 0
    }
    depositar(valor){
        this.saldo += valor
    }
    sacar(){
        throw new Error("Método sacar() precisa ser implementado")
    }
}

class ContaPoupança extends ContaBancaria {
    constructor(cliente, numero){
        super(cliente, numero)
        this.aniversario = Date.now()
    }
    sacar(valor){
        if(valor > disponivel){
            throw new Error("Saldo insuficiente")
        }
        this.saldo -= valor
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(cliente,numero){
        super(cliente, numero)
        this.limite = 0
    }
    sacar(valor){
        let disponivel = this.saldo + this.limite
        if(valor > disponivel){
            throw new Error("Saldo insuficiente")
        }
        this.saldo -= valor
    }
}

const cp1 = new ContaPoupança("Gustavo", 1)
const cp2 = new ContaPoupança("Maria", 2)
const cc1 = new ContaCorrente("Joao", 3)

console.log(cp1)
cp1.depositar(2000)
cp2.depositar(1000)
cc1.depositar(1000)
cc1.limite = 1000
console.log(cc1)
cc1.sacar(1000)
console.log(cc1)

