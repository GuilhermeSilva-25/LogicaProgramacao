import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner input = new Scanner(System.in)) {
            double a = input.nextDouble();
            double b = input.nextDouble();
            double c = input.nextDouble();
            boolean isTriangle = checkIsTriangle(a, b, c);
            if (isTriangle) {
                double perimeter = calculatePerimeter(a, b, c);
                System.out.printf("Perimetro = %.1f%n", perimeter);
            } else {
                double area = calculateArea(a, b, c);
                System.out.printf("Area = %.1f%n", area);
            }
        }
    }

    public static boolean checkIsTriangle(double a, double b, double c) {
        return a + b > c &&
                a + c > b &&
                b + c > a;
    }

    public static double calculatePerimeter(double a, double b, double c) {
        return a + b + c;
    }

    public static double calculateArea(double a, double b, double c) {
        return ((a + b) * c) / 2.0;
    }
}