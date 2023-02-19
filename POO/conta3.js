//Desafio conta bancaria
/*  
   3. Criar classe cliente e compor as classes concretas
   - Nome
   - Documento
 */

class Cliente{
    constructor(nome, documento){
        this.nome = nome
        this.documento = documento
    }
}

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

const gustavo = new Cliente()
const maria = new Cliente()

const cp1 = new ContaPoupança(gustavo, 1)
const cp2 = new ContaPoupança(maria, 2)
const cc1 = new ContaCorrente("Joao", 3)

cp1.depositar(2000)
cp2.depositar(1000)
cc1.depositar(1000)
cc1.limite = 1000
cc1.sacar(1000)
