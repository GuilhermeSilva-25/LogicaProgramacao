import java.util.Scanner;

public class Main {
    public static final int QUANTITY_OF_VALUES = 100;
    public static void main(String... args) {
        try (Scanner input = new Scanner(System.in)) {
            int higherValue = Integer.MIN_VALUE;
            int position = 0;
            for (int i = 0; i < QUANTITY_OF_VALUES; i++) {
                int value = input.nextInt();
                if (value > higherValue) {
                    higherValue = value;
                    position = i + 1;
                }
            }
            System.out.printf("%d\n%d\n", higherValue, position);
        }
    }
}