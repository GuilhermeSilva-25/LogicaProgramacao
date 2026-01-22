import java.util.Scanner;

public class Main {
    public static final int NUMBER_OF_VALUES = 5;
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int numberOfEvenValues = 0;
            for (int i = 0; i < NUMBER_OF_VALUES; i++) {
                int value = input.nextInt();
                if (value % 2 == 0) {
                    numberOfEvenValues++;
                }
            }
            System.out.printf("%d valores pares\n", numberOfEvenValues);
        }
    }
}