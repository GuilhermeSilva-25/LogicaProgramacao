import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {

            while (true) {
                int m = input.nextInt();
                int n = input.nextInt();

                if (m <= 0 || n <= 0) {
                    break;
                }

                int sum = 0;
                int start = Math.min(m, n);
                int end = Math.max(m, n);

                for (int i = start; i <= end; i++) {
                    System.out.print(i + " ");
                    sum += i;
                }

                System.out.println("Sum=" + sum);

            }
        }
    }
}