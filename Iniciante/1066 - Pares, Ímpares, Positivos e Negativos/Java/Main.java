import java.util.Scanner;

public class Main {
    public static final int NUMBER_OF_VALUES = 5;

    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int even = 0;
            int odd = 0;
            int positive = 0;
            int negative = 0;

            for (int i = 0; i < NUMBER_OF_VALUES; i++) {
                int value = input.nextInt();
                if (value % 2 == 0) {
                    even++;
                } else {
                    odd++;
                }

                if (value > 0) {
                    positive++;
                } else if (value < 0) {
                    negative++;
                }
            }
            System.out.printf("%d valor(es) par(es)%n", even);
            System.out.printf("%d valor(es) impar(es)%n", odd);
            System.out.printf("%d valor(es) positivo(s)%n", positive);
            System.out.printf("%d valor(es) negativo(s)%n", negative);
        }
    }
}