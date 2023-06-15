import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    //private negociacoes: Array<Negociacao> = [];
    // abaixo temos um "açucar sintático" da opção acima
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    // lista(): ReadonlyArray<Negociacao> {
    // outro "açucar"
    lista(): readonly Negociacao[] {
        return [...this.negociacoes]
    }
}
