import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try(Scanner input = new Scanner(System.in)) {
            int correctPassword = 2002;
            while (true) {
                int password = input.nextInt();
                if (password == correctPassword) {
                    System.out.println("Acesso Permitido");
                    break;
                } else {
                    System.out.println("Senha Invalida");
                }
            }
        }
    }
}