export class Negociacoes {
    constructor() {
        //private negociacoes: Array<Negociacao> = [];
        // abaixo temos um "açucar sintático" da opção acima
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): ReadonlyArray<Negociacao> {
    // outro "açucar"
    lista() {
        return [...this.negociacoes];
    }
}
