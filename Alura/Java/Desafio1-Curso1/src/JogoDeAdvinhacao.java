/*
Crie um programa que simula um jogo de adivinhação, que deve gerar um número aleatório entre
0 e 100 e pedir para que o usuário tente adivinhar o número, em até 5 tentativas.
A cada tentativa, o programa deve informar se o número digitado pelo usuário é maior
ou menor do que o número gerado.
 */

import java.util.Random;
import java.util.Scanner;

public class JogoDeAdvinhacao {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int numeroAleatorio = new Random().nextInt(100);
        System.out.println(numeroAleatorio);
        int numeroTentado;

        System.out.println("Você tem 5 tentativas para advinhar o número secreto.");
        for (int tentativas = 1; tentativas <= 5; tentativas++) {
            System.out.println("Digite um número de 1 a 100");
            numeroTentado = sc.nextInt();

            if (numeroTentado == numeroAleatorio) {
                System.out.println("Parabéns você acertou o número");
                break;
            } else {
                System.out.println("Você errou o número.");
                if (numeroTentado > numeroAleatorio) {
                    System.out.println("O número que você digitou é maior do que o número secreto");
                } else if (numeroTentado < numeroAleatorio) {
                    System.out.println("O número que você digitou é menor do que o número secreto");
                }
            }

            if (tentativas == 5) {
                System.out.println("Você não possui mais tentativas.");
            }
        }
    }
}
