package br.com.alura.aluraudio.Main;

import br.com.alura.aluraudio.Musica;
import br.com.alura.aluraudio.Podcast;

public class Main {
    public static void main(String[] args) {
        Musica musicaCaravan = new Musica();
        musicaCaravan.setTitulo("Caravan");
        musicaCaravan.setArtista("Juan Tizol e Duke Ellington");
        musicaCaravan.reproduzir();
        musicaCaravan.curtir();

        Podcast podcastHipsters = new Podcast();
        podcastHipsters.setTitulo("Hipsters");
        podcastHipsters.setHost("Guilherme Silveira");
        podcastHipsters.reproduzir();
        podcastHipsters.curtir();
    }
}
