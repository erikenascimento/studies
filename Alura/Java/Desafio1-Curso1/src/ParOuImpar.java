/*
Crie um programa que solicite ao usuário a entrada de um número inteiro.
Verifique se o número é par ou ímpar e exiba uma mensagem correspondente.
 */

import java.util.Scanner;

public class ParOuImpar {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Insira um número inteiro");
        int numeroInserido = sc.nextInt();

        if (numeroInserido % 2 == 0) {
            System.out.println("O número inserido é par");
        } else {
            System.out.println("O número inserido é impar");
        }
    }
}
