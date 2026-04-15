import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int n = input.nextInt();

            for (int i = 0; i < n; i++) {
                int x = input.nextInt();
                int y = input.nextInt();

                int sumTotal = 0;
                int count = y;
                int value = x;

                if (value % 2 == 0) {
                    value++;
                }

                while (count > 0) {
                    sumTotal += value;
                    value += 2;
                    count--;
                }

                System.out.println(sumTotal);
            }
        }
    }
}