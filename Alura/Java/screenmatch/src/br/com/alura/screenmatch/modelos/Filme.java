package br.com.alura.screenmatch.modelos;

import org.w3c.dom.ls.LSOutput;

public class Filme {
    public String nome = "";
    int anoDeLancamento;
    String descricao = "";
    boolean incluidoNoPlano;
    private double somaDasAvaliacoes = 0.0;
    private int totalDeAvaliacoes = 0;
    int duracaoEmMinutos;

    public int getTotalDeAvaliacoes() {
        return totalDeAvaliacoes;
    }

    public void exibeFichaTecnica() {
        System.out.println("Nome do filme: " + nome);
        System.out.println("Ano de lançamento: " + anoDeLancamento);
    }

    public void avalia(double nota) {
        somaDasAvaliacoes += nota;
        totalDeAvaliacoes++;
    }

    public double pegaMedia() {
        return somaDasAvaliacoes/totalDeAvaliacoes;
    }
}
