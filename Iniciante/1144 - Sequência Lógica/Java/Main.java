import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int n = input.nextInt();

            for (int i = 1; i <= n; i++) {
                int square = i * i;
                int cube = i * i * i;
                System.out.printf("%d %d %d%n", i, square, cube);
                System.out.printf("%d %d %d%n", i, (square + 1), (cube + 1));
            }
        }
    }
}