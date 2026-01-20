import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static final int QUANTITY_OF_VALUES = 6;
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner input = new Scanner(System.in)) {
            int count = 0;
            double sum = 0;

            for (int i = 0; i < QUANTITY_OF_VALUES; i++) {
                double value = input.nextDouble();
                if (value > 0) {
                    count++;
                    sum += value;
                }
            }
            System.out.printf("%d valores positivos\n%.1f\n", count, sum/count);
        }
    }
}