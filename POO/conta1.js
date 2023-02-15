//Desafio conta bancaria
/* 1. criar conta abstrata chamada ContaBancaria   

- cliente   

- numero   

- saldo   

- depositar(valor)   

- sacar(valor) */

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

let conta = new ContaBancaria("Gustavo", 0)