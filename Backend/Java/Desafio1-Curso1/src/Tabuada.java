/*
Crie um programa que solicite ao usuário um número e exiba a tabuada desse número de 1 a 10.
 */

import java.util.Scanner;

public class Tabuada {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Insira um número inteiro");
        int numeroInserido = sc.nextInt();

        for (int i = 1; i <= 10; i++) {
            System.out.println(numeroInserido + " x " + i + " = " + (numeroInserido * i));
        }
    }
}
