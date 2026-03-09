import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int n = input.nextInt();

            for (int i = 0; i < n; i++) {
                int x = input.nextInt();
                int y = input.nextInt();
                System.out.println(calculateOddSum(x, y));
            }
        }
    }

    public static int calculateOddSum(int x, int y) {
        int sum = 0;
        int end = Math.max(x, y);
        int start = Math.min(x, y) + 1;

        if (start % 2 == 0) {
            start += 1;
        }

        for (int j = start; j < end; j += 2) {
            sum += j;
        }

        return sum;
    }
}