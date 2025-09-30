import java.util.Scanner;
import java.util.Locale;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner sc = new Scanner(System.in)) {
            double a = sc.nextDouble();
            double b = sc.nextDouble();
            double c = sc.nextDouble();
            final double WEIGHT_A = 2.0;
            final double WEIGHT_B = 3.0;
            final double WEIGHT_C = 5.0;
            final double TOTAL_WEIGHT = WEIGHT_A + WEIGHT_B + WEIGHT_C;
            double studentAverage = ((a * WEIGHT_A) + (b * WEIGHT_B) + (c * WEIGHT_C)) / TOTAL_WEIGHT;
            System.out.printf("MEDIA = %.1f%n", studentAverage);
        }
    }
}