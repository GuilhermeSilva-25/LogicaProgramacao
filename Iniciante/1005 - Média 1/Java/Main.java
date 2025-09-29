import java.util.Scanner;
import java.util.Locale;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner sc = new Scanner(System.in)) {
            double a = sc.nextDouble();
            double b = sc.nextDouble();
            final double WEIGHT_A = 3.5;
            final double WEIGHT_B = 7.5;
            final double TOTAL_WEIGHT = WEIGHT_A + WEIGHT_B;
            double studentAverage = ((a * WEIGHT_A) + (b * WEIGHT_B)) / TOTAL_WEIGHT;
            System.out.printf("MEDIA = %.5f%n", studentAverage);
        }

    }
}