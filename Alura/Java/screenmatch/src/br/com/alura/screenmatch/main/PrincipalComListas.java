package br.com.alura.screenmatch.main;

import br.com.alura.screenmatch.modelos.Filme;
import br.com.alura.screenmatch.modelos.Serie;
import br.com.alura.screenmatch.modelos.Titulo;

import java.util.ArrayList;

public class PrincipalComListas {
    public static void main(String[] args) {
        Filme filmePoderosoChefao = new Filme("O Poderoso Chefão", 1970);
        Filme filmeAvatar = new Filme("Avatar", 2023);
        Filme filmeDogville = new Filme("Dogville", 2023);

        Serie serieLost = new Serie("Lost", 2000);

        ArrayList<Titulo> listaDeTitulos = new ArrayList<>();
        listaDeTitulos.add(filmeDogville);
        listaDeTitulos.add(filmePoderosoChefao);
        listaDeTitulos.add(filmeAvatar);
        listaDeTitulos.add(serieLost);

        System.out.println("\nLista de Títulos:\n");
        for (Titulo item: listaDeTitulos) {
            System.out.println(item);
        }
    }
}
