export class Conta{
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
            throw new Error("Vocẽ não deveria instanciar um objeto tipo Conta")
        }
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }

    set cliente(novoValor) {
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get cliente() {
        return this._cliente
    }

    get saldo() {
        return this._saldo
    }

    sacar(valor) {
        throw new Error("O método Sacar de Conta é abstrato!")
    }
    
    _sacar(valor, taxa) {
        const valorSacado = taxa * valor
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado
            return valorSacado
        }

        return 0
    }

    depositar(valor) {
        this._saldo += valor           
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}