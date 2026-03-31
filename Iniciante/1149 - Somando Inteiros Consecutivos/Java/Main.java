import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int a = input.nextInt();
            int n = input.nextInt();

            while (n <= 0) {
                n = input.nextInt();
            }

            int sumTotal = 0;

            for (int i = 0; i <= n - 1; i++) {
                sumTotal += a + i;
            }

            System.out.println(sumTotal);
        }
    }
}