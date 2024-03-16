/*
Crie um programa que solicite ao usuário um número e calcule o fatorial desse número.
 */

import java.util.Scanner;

public class Fatorial {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Insira um número inteiro positivo");
        int inteiroInserido = sc.nextInt();
        int fatorial = inteiroInserido;

        for (int i = inteiroInserido - 1; i >= 1; i--) {
            fatorial *= i;
        }
        System.out.println("O fatorial desse número é: " + fatorial);
    }
}
