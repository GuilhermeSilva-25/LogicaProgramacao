import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            while (true) {
                int x = input.nextInt();
                int y = input.nextInt();

                if (x == y) {
                    break;
                } else if (x < y) {
                    System.out.println("Crescente");
                } else {
                    System.out.println("Decrescente");
                }
            }
        }
    }
}