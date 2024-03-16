/*
Peça ao usuário para inserir dois números inteiros. Compare os números e
imprima uma mensagem indicando se são iguais, diferentes, o primeiro é maior ou o segundo é maior.
 */

import java.util.Scanner;

public class ComparaInt {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Insira um número");
        int primeiroNumero = sc.nextInt();
        System.out.println("Insira outro número");
        int segundoNumero = sc.nextInt();

        if (primeiroNumero == segundoNumero) {
            System.out.println("Os números que você digitou são iguais");
        } else {
            System.out.println("Os números que você digitou são diferentes.");

            if (primeiroNumero > segundoNumero) {
                System.out.println("O primeiro número que você digitou é maior que o segundo");
            } else if (segundoNumero > primeiroNumero) {
                System.out.println("O segundo número que você digitou é maior que o primeiro");
            }
        }
    }
}
