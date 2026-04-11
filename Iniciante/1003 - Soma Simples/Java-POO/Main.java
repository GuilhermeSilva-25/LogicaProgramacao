import java.util.Scanner;

class Calculator {
    private Calculator() {
        throw new UnsupportedOperationException("Utility class cannot be instantiated");
    }

    public static int sum(int a, int b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        try (var input = new Scanner(System.in)) {
            var a = input.nextInt();
            var b = input.nextInt();

            var result = Calculator.sum(a, b);

            System.out.printf("SOMA = %d%n", result);
        }
    }
}