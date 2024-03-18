import org.w3c.dom.ls.LSOutput;

public class Filme {
    String nome = "";
    int anoDeLancamento;
    String descricao = "";
    boolean incluidoNoPlano;
    double somaDasAvaliacoes = 0.0;
    int totalDeAvaliacoes = 0;
    int duracaoEmMinutos;

    void exibeFichaTecnica() {
        System.out.println("Nome do filme: " + nome);
        System.out.println("Ano de lançamento: " + anoDeLancamento);
    }

    void avalia(double nota) {
        somaDasAvaliacoes += nota;
        totalDeAvaliacoes++;
    }

    double pegaMedia() {
        return somaDasAvaliacoes/totalDeAvaliacoes;
    }
}
