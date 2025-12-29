import java.util.Locale;
import java.util.Scanner;

public class Main {
    private static final double[] PRICE_TABLE = {4.00, 4.50, 5.00, 2.00, 1.50};
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner input = new Scanner(System.in)) {
            int code = input.nextInt();
            int amount = input.nextInt();
            double totalBill = calculateTotalBill(code, amount);
            System.out.printf("Total: R$ %.2f%n", totalBill);
        }
    }

    public static double calculateTotalBill(int code, int amount) {
        if (code < 1 || code > PRICE_TABLE.length) return 0.0;

        return PRICE_TABLE[code - 1] * amount;
    }
}