import java.util.Locale;
import java.util.Scanner;

public class Main {
    private static final double PI = 3.14159;
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner sc = new Scanner(System.in)) {
            double a = sc.nextDouble();
            double b = sc.nextDouble();
            double c = sc.nextDouble();
            double triangleArea = calculateTriangleArea(a, c);
            double circleArea = calculateCircleArea(c);
            double trapezoidArea = calculateTrapezoidArea(a, b, c);
            double squareArea = calculateSquareArea(b);
            double rectangleArea = calculateRectangleArea(a, b);
            System.out.printf("TRIANGULO: %.3f%n", triangleArea);
            System.out.printf("CIRCULO: %.3f%n", circleArea);
            System.out.printf("TRAPEZIO: %.3f%n", trapezoidArea);
            System.out.printf("QUADRADO: %.3f%n", squareArea);
            System.out.printf("RETANGULO: %.3f%n", rectangleArea);
        }
    }

    public static double calculateTriangleArea(double cathetus1, double cathetus2) {
        return (cathetus1 * cathetus2) / 2.0;
    }

    public static double calculateCircleArea(double radius) {
        return PI * Math.pow(radius, 2);
    }

    public static double calculateTrapezoidArea(double base1, double base2, double height) {
        return ((base1 + base2) * height) / 2.0;
    }

    public static double calculateSquareArea(double side) {
        return side * side;
    }

    public static double calculateRectangleArea(double base, double height) {
        return base * height;
    }
}