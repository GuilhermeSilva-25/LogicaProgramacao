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
        try (Scanner input = new Scanner(System.in)) {
            int a = input.nextInt();
            int b = input.nextInt();

            int result = Calculator.sum(a, b);

            System.out.printf("X = %d%n", result);
        }
    }
}