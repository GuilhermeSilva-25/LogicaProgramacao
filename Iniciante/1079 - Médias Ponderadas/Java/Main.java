import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static final double WEIGHT_A = 2.0;
    public static final double WEIGHT_B = 3.0;
    public static final double WEIGHT_C = 5.0;
    public static final double TOTAL_WEIGHT = WEIGHT_A + WEIGHT_B + WEIGHT_C;

    public static void main(String... args) {
        Locale.setDefault(Locale.US);
        try (Scanner input = new Scanner(System.in)) {
            final int NUMBER_OF_NOTES = 3;

            int n = input.nextInt();
            double[] notes = new double[NUMBER_OF_NOTES];

            for (int i = 0; i < n; i++) {
                for (int j = 0; j < NUMBER_OF_NOTES; j++) {
                    notes[j] = input.nextDouble();
                }
                double average = calculateAverage(notes);
                System.out.printf("%.1f\n", average);
            }
        }
    }

    public static double calculateAverage(double[] notes) {
        return ((notes[0] * WEIGHT_A) + (notes[1] * WEIGHT_B) + (notes[2] * WEIGHT_C)) / TOTAL_WEIGHT;
    }
}