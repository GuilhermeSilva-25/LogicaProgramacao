import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int n = input.nextInt();

            for (int i = 0; i < n - 1; i++) {
                System.out.print("Ho ");
            }

            System.out.printf("Ho!%n");
        }
    }
}