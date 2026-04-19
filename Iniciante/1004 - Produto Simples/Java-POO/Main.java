import java.util.Scanner;
import java.math.BigDecimal;

class Calculator {
    private Calculator() {
        throw new UnsupportedOperationException("Utility class cannot be instantiated");
    }

    public static int multiplication(int a, int b) {
        return a * b;
    }

    /*
     * public static BigDecimal multiplication(BigDecimal a, BigDecimal b) {
     * return a.multiply(b);
     * }
     */
}

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int value1 = input.nextInt();
            int value2 = input.nextInt();

            int prod = Calculator.multiplication(value1, value2);

            System.out.printf("PROD = %d%n", prod);
        }
    }
}