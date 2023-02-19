//Desafio conta bancaria
/*  
   5.  Polimorfismo
   Criar classe especializada em transferir.
   Essa classe tera um unico método transferir(contaOrigem, contaDestino, valor)
 */

   class Transferir{
        static execute(contaOrigem, contaDestino, valor){
            if( !contaOrigem instanceof ContaBancaria || 
                !contaDestino instanceof ContaBancaria){
                throw new Error("contas precisam herdar de ContaBancaria")
            }
            try{
                contaOrigem.sacar(valor)
                contaDestino.depositar(valor)
            }catch(e){
                console.log("deu ruim", e.message)
            }
        }
   }

class Cliente{
    constructor(nome, documento, tipoCliente){
        if(this.constructor === Cliente){
            throw new Error("Cliente é uma classe abstrata")
        }
        this.nome = nome
        this.documento = documento
        this.tipoCliente = tipoCliente
    }
}

class PessoaFisica extends Cliente{
    constructor(nome,documento){
        super(nome, documento, "CPF")
    }
}

class PessoaJuridica extends Cliente{
    constructor(nome,documento){
        super(nome, documento, "CNPJ")
    }
}
const cliente1 = new PessoaFisica("Daniel", "122.133.144-30")
const cliente2 = new PessoaJuridica("Daniel la", "122.133.144/0001-01")

class ContaBancaria{
    constructor(cliente, numero){  
        if(this.constructor === ContaBancaria){
        throw new Error("ContaBancaria é uma class abstrata")
        }

        this.cliente = cliente
        this.numero = numero
        this.saldo = 0
    }
    get dadoscliente(){
        return `${this.cliente.nome}, ${tipoCliente}: ${this.cliente.documento}`
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
        let disponivel = this.saldo
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

const gustavo = new PessoaFisica("Gustavo", "122.133.144-50")
const maria = new PessoaJuridica("Maria", "122.133.144/0001-50")

const cp1 = new ContaPoupança(gustavo, 1)
const cp2 = new ContaPoupança(maria, 2)
const cc1 = new ContaCorrente(maria, 3)

cp1.depositar(2000)
cp2.depositar(1000)
cc1.depositar(1000)
cc1.limite = 1000
cc1.sacar(1000)


