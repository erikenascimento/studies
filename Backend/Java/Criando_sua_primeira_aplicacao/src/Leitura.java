import java.util.Scanner;

public class Leitura {
    public static void main(String[] args) {
        Scanner leitura = new Scanner(System.in);

        System.out.println("Digite seu filme favorito");
        String entradaFilme = leitura.nextLine();

        System.out.println("Qual o ano de lançamento?");
        int entradaAnoLancamento = leitura.nextInt();

        System.out.println("Diga sua avaliação para o filme");
        double entradaAvaliacao = leitura.nextDouble();

        System.out.println(entradaFilme);
        System.out.println(entradaAnoLancamento);
        System.out.println(entradaAvaliacao);
    }
}
