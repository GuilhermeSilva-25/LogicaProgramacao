import java.util.Locale;
import java.util.Scanner;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner input = new Scanner(System.in)) {
            double a = input.nextDouble();
            double b = input.nextDouble();
            double c = input.nextDouble();
            double[] orderedNumbers = sortNumbers(a, b, c);
            String triangleType = checkTriangleType(orderedNumbers);
            System.out.printf(triangleType);
        }
    }

    public static double[] sortNumbers(double a, double b, double c) {
        double[] array = { a, b, c };
        Arrays.sort(array);
        return array;
    }

    public static String checkTriangleType(double[] orderedNumbers) {
        String formattedText = "";
        double c = orderedNumbers[0];
        double b = orderedNumbers[1];
        double a = orderedNumbers[2];

        if (a >= b + c) {
            return "NAO FORMA TRIANGULO%n";
        }

        if (Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2)) {
            formattedText += "TRIANGULO RETANGULO%n";
        } else if (Math.pow(a, 2) > Math.pow(b, 2) + Math.pow(c, 2)) {
            formattedText += "TRIANGULO OBTUSANGULO%n";
        } else if (Math.pow(a, 2) < Math.pow(b, 2) + Math.pow(c, 2)) {
            formattedText += "TRIANGULO ACUTANGULO%n";
        }

        if (a == b && a == c) {
            formattedText += "TRIANGULO EQUILATERO%n";
        } else if (a == b || a == c || b == c) {
            formattedText += "TRIANGULO ISOSCELES%n";
        }

        return formattedText;
    }
}