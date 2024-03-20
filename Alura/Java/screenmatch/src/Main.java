import br.com.alra.screenmatch.calculos.CalculadoraDeTempo;
import br.com.alra.screenmatch.calculos.FiltroRecomendacao;
import br.com.alura.screenmatch.modelos.Episodio;
import br.com.alura.screenmatch.modelos.Filme;
import br.com.alura.screenmatch.modelos.Serie;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Filme filmePoderosoChefao = new Filme();
        filmePoderosoChefao.setNome("O poderoso chefão");
        filmePoderosoChefao.setAnoDeLancamento(1970);
        filmePoderosoChefao.setDuracaoEmMinutos(180);
        System.out.println("\n");
        filmePoderosoChefao.exibeFichaTecnica();
        System.out.println("Duração do filme: " + filmePoderosoChefao.getDuracaoEmMinutos());

        filmePoderosoChefao.avalia(8);
        filmePoderosoChefao.avalia(5);
        filmePoderosoChefao.avalia(10);
        System.out.println("Total de avaliações: " + filmePoderosoChefao.getTotalDeAvaliacoes());
        System.out.println("Média de avaliações: " + filmePoderosoChefao.pegaMedia());

        Serie lost = new Serie();
        lost.setNome("Lost");
        lost.setAnoDeLancamento(2000);
        System.out.println("\n");
        lost.exibeFichaTecnica();
        lost.setTemporadas(10);
        lost.setEpisodiosPorTemporada(10);
        lost.setMinutosPorEpisodio(50);
        System.out.println("Duração para maratonar: " + lost.getDuracaoEmMinutos());

        Filme filmeAvatar = new Filme();
        filmeAvatar.setNome("Avatar");
        filmeAvatar.setAnoDeLancamento(2023);
        filmeAvatar.setDuracaoEmMinutos(200);

        CalculadoraDeTempo calculadora = new CalculadoraDeTempo();
        calculadora.inclui(filmePoderosoChefao);
        calculadora.inclui(filmeAvatar);
        System.out.println("Tempo total da série: " + calculadora.getTempoTotal());

        FiltroRecomendacao filtro = new FiltroRecomendacao();
        filtro.filtra(filmePoderosoChefao);

        Episodio episodio = new Episodio();
        episodio.setNumero(1);
        episodio.setSere(lost);
        episodio.setTotalVisualizacoes(300);
        filtro.filtra(episodio);

        Filme filmeDogville = new Filme();
        filmeDogville.setNome("Dogville");
        filmeDogville.setDuracaoEmMinutos(200);
        filmeDogville.setAnoDeLancamento(2003);
        filmeDogville.avalia(10);

        ArrayList<Filme> listaDeFilmes = new ArrayList<>();
        listaDeFilmes.add(filmeDogville);
        listaDeFilmes.add(filmePoderosoChefao);
        listaDeFilmes.add(filmeAvatar);
        System.out.println("\nTamanho da lista: " + listaDeFilmes.size());
        System.out.println("Primeiro filme: " + listaDeFilmes.get(0).getNome());
        System.out.println("lista de filmes: " + listaDeFilmes);
    }
}
