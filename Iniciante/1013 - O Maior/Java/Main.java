import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            int[] values = new int[3];
            int higherValue = Integer.MIN_VALUE;
            for (int i = 0; i < values.length; i++) {
                values[i] = sc.nextInt();
                if (values[i] > higherValue) {
                    higherValue = values[i];
                }
            }
            System.out.printf("%d eh o maior%n", higherValue);
        }
    }
}