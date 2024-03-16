import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String nomeDoCliente = "Jeff Bezos";
        String tipoDeConta = "Corrente";
        double saldo = 2000.00;

        System.out.println("\nOlá: " + nomeDoCliente);
        System.out.println("Está é sua conta: " + tipoDeConta);
        System.out.println("Seu saldo é de: " + saldo);

        int opcaoDesejada = 0;
        double montante = 0;
        while (opcaoDesejada > 0 || opcaoDesejada < 4) {
            System.out.println("""
                    \n
                    ############################
                    Digite a opção desejada:
                    1 - Consultar saldo.
                    2 - Sacar valor.
                    3 - Depositar valor.
                    4 - Sair.
                    """);

            Scanner sc = new Scanner(System.in);
            opcaoDesejada = sc.nextInt();

            if (opcaoDesejada < 1 || opcaoDesejada > 4) {
                System.out.println("Opção inválida!");
            } else if (opcaoDesejada == 4) {
                System.out.println("Saindo.");
                break;
            } else if (opcaoDesejada == 1) {
                System.out.println("Seu saldo é de: " + saldo);
            } else if (opcaoDesejada == 2) {
                System.out.println("Qual valor que você deseja sacar?");
                montante = sc.nextDouble();

                if (montante > saldo) {
                    System.out.println("Saldo insuficiente para essa operação," +
                            "favor, consulte seu saldo antes de tentar essa operação.");
                } else if (montante < 0) {
                    System.out.println("Não é possível sacar um valor negativo.\n" +
                            "Para realizar um depósito selecione a opção correspondente no menu");
                } else {
                    saldo -= montante;
                    System.out.println("Saque realizado com sucesso.");
                }
            } else if (opcaoDesejada == 3) {
                System.out.println("Qual valor que você deseja depositar?");
                montante = sc.nextDouble();

                if (montante < 0) {
                    System.out.println("Você não pode inserir um valor negativo aqui.\n" +
                            "Para realizar um saque selecione a opção correspondente no menu");
                } else {
                    saldo += montante;
                    System.out.println("Depósito realizado com sucesso.");
                }
            }
        }
    }
}