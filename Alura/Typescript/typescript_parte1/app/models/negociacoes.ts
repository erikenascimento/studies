import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    //private negociacoes: Array<Negociacao> = [];
    // abaixo temos um "açucar sintático" da opção acima
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    // lista(): ReadonlyArray<Negociacao> {
    // outro "açucar"
    public lista(): readonly Negociacao[] {
        return [...this.negociacoes]
    }
}
