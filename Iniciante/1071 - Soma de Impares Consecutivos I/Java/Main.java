import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int x = input.nextInt();
            int y = input.nextInt();
            int sum = 0;
            int end = Math.max(x, y);
            int start = Math.min(x, y) + 1;

            if (start % 2 == 0) {
                start += 1;
            }

            for (int i = start; i < end; i += 2) {
                sum += i;

            }
            System.out.println(sum);
        }
    }
}