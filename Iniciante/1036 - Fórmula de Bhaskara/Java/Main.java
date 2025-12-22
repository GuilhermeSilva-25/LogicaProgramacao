import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner input = new Scanner(System.in)) {
            double a = input.nextDouble();
            double b = input.nextDouble();
            double c = input.nextDouble();
            double delta = calculateDelta(a, b, c);
            if (delta < 0 || a == 0.0) {
                System.out.println("Impossivel calcular");
            } else {
                double[] roots = calculateRoots(a, b, delta);
                printRoots(roots);
            }
        }
    }

    public static double calculateDelta(double a, double b, double c) {
        return (Math.pow(b, 2)) - (4 * a * c);
    }

    public static double[] calculateRoots(double a, double b, double delta) {
        double r1 = (-b + Math.sqrt(delta)) / (2 * a);
        double r2 = (-b - Math.sqrt(delta)) / (2 * a);
        return new double[] { r1, r2 };
    }

    public static void printRoots(double[] roots) {
        System.out.printf("R1 = %.5f%n", roots[0]);
        System.out.printf("R2 = %.5f%n", roots[1]);
    }
}