import java.util.Locale;
import java.util.Scanner;

class Circle {
    private final double radius;
    private static final double PI = 3.14159;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double calculateArea() {
        return PI * (radius * radius);
    }
}

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner input = new Scanner(System.in)) {
            double radius = input.nextDouble();

            Circle circle = new Circle(radius);
            double area = circle.calculateArea();

            System.out.printf("A=%.4f%n", area);
        }
    }
}