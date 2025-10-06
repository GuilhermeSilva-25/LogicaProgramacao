import java.util.Scanner;
import java.util.Locale;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner sc = new Scanner(System.in)) {
            int idPart1 = sc.nextInt();
            int amountPart1 = sc.nextInt();
            double pricePart1 = sc.nextDouble();
            int idPart2 = sc.nextInt();
            int amountPart2 = sc.nextInt();
            double pricePart2 = sc.nextDouble();
            double totalValue = (amountPart1 * pricePart1) + (amountPart2 * pricePart2);
            System.out.printf("VALOR A PAGAR: R$ %.2f%n", totalValue);
        }
    }
}