import java.util.Scanner;
import java.util.Locale;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner sc = new Scanner(System.in)) {
            String sellerName = sc.nextLine();
            double fixedSalary = sc.nextDouble();
            double totalSales = sc.nextDouble();
            final double COMMISSION_RATE = 0.15;
            double commission = totalSales * COMMISSION_RATE;
            double totalSalary = fixedSalary + commission;
            System.out.printf("TOTAL = R$ %.2f%n", totalSalary);
        }
    }
}