/*
Escreva um programa que converta uma temperatura em graus Celsius para Fahrenheit.
Utilize variáveis para representar os valores das temperaturas e imprima no console
o valor convertido de Celsius para Fahrenheit.

Em seguida, crie uma variável inteira para exibir a temperatura em Fahrenheit sem casas decimais.
 */

public class Temperatura {
    public static void main(String[] args) {
        double temperaturaCelsius = 28.0;
            // Fórmula de conversão: Fahrenheit = (Celsius * 1.8) + 32
        double temperaturaFarenheit = (temperaturaCelsius * 1.8) + 32;

        System.out.println("Temperatura em Farenheit: " + temperaturaFarenheit);

        int farenheitSemDecimais = (int) temperaturaFarenheit;
        System.out.println("Temperatura em Farenheit sem decimais: " + farenheitSemDecimais);
    }
}
