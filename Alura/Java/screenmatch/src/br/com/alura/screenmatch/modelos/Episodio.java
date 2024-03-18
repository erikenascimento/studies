package br.com.alura.screenmatch.modelos;

import br.com.alra.screenmatch.calculos.Classificavel;

public class Episodio implements Classificavel {
    private int numero = 1;
    private String nome = "";
    private Serie sere;
    private int totalVisualizacoes = 0;

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Serie getSere() {
        return sere;
    }

    public void setSere(Serie sere) {
        this.sere = sere;
    }

    public int getTotalVisualizacoes() {
        return totalVisualizacoes;
    }

    public void setTotalVisualizacoes(int totalVisualizacoes) {
        this.totalVisualizacoes = totalVisualizacoes;
    }

    @Override
    public int getClassificacao() {
        if (getTotalVisualizacoes() > 100) {
            return 4;
        } else {
            return 2;
        }
    }
}
