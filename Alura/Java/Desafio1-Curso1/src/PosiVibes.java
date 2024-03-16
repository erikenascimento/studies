/*
Crie um programa que solicite ao usuário digitar um número.
Se o número for positivo, exiba "Número positivo", caso contrário, exiba "Número negativo".
 */

import java.util.Scanner;

public class PosiVibes {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite um número.");
        long numeroDigitado = sc.nextLong();

        if (numeroDigitado > 0) {
            System.out.println("Número positivo.");
        } else if (numeroDigitado < 0) {
            System.out.println("Número negativo.");
        } else {
            System.out.println("Número neutro");
        }
    }
}
