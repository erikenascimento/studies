/*
Declare uma variável do tipo double valorEmDolares. Atribua um valor em dólares a essa variável.
Considere que o valor de 1 dólar é equivalente a 4.94 reais.
Realize a conversão do valor em dólares para reais e imprima o resultado formatado.
 */

public class ConversorMoeda {
    public static void main(String[] args) {
        double valorEmDolare = 10.0;
        double cotacaoReal_Dolar = 4.94;

        double converterDolarParaReal = valorEmDolare * cotacaoReal_Dolar;

        System.out.println("O valor convertido é de: " + converterDolarParaReal);
    }
}
