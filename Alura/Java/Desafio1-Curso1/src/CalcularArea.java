/*
Crie um menu que oferece duas opções ao usuário:
"1. Calcular área do quadrado" e "2. Calcular área do círculo".
Solicite a escolha do usuário e realize o cálculo da área com base na opção selecionada.
 */

import java.util.Scanner;

public class CalcularArea {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite 1 para calcular a área do quadrado ou" +
                " digite 2 para calcular a área do círculo");
        int escolha = sc.nextInt();

        if (escolha == 1) {
            System.out.println("Digite a dimensão do LADO do quadrado em centímetros");
            double lado = sc.nextDouble();

            System.out.println("A área do quadrado é de: " + (lado * lado) +
                    " centimetros quadrados");
        } else if (escolha == 2) {
            System.out.println("Digite a dimensão do RAIO do círculo em centímetros");
            double raio = sc.nextDouble();

            System.out.println("A área do circulo é de: " + (Math.PI * Math.pow(raio, 2)) +
                    " centimetros quadrados");
        }
    }
}
