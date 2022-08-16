class Conta {
    constructor(saldo) {
        this._saldo = saldo
    }

    get saldo() {
        return this._saldo
    }

    atualiza(taxa) {
        throw new Error('O método deve ser chamado por uma classe filha')
    }
}

class ContaCorrente extends Conta {
    atualiza(taxa) {
        this._saldo += taxa
    }
}

class ContaPoupanca extends Conta {
    atualiza(taxa) {
        this._saldo += taxa * 2
    }
}

let conta1 = new ContaCorrente(200)
let conta2 = new ContaPoupanca(300)
conta1.atualiza(2)
conta2.atualiza(3)
console.log(conta1.saldo)
console.log(conta2.saldo) 