import java.util.Scanner;
import java.util.Locale;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner sc = new Scanner(System.in)) {
            double radius = sc.nextDouble();
            final double PI = 3.14159;
            final double FRACTIONAL_CONSTANT = 4.0 / 3.0;
            double volumeSphere = FRACTIONAL_CONSTANT * PI * Math.pow(radius, 3);
            System.out.printf("VOLUME = %.3f%n", volumeSphere);
        }
    }
}