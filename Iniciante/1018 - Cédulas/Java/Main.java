import java.util.Scanner;

public class Main {
    private static final int[] BANKNOTES = { 100, 50, 20, 10, 5, 2, 1 };
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int value = input.nextInt();
            System.out.println(value);
            calculateBanknotes(value);
        }
    }

    public static void calculateBanknotes(int value) {
        for (int banknote : BANKNOTES) {
            int amountBanknotes = value / banknote;
            printQuantityBanknotes(amountBanknotes, banknote);
            value %= banknote;
        }
    }

    public static void printQuantityBanknotes(int amountBanknotes, int banknoteValue) {
        System.out.printf("%d nota(s) de R$ %d,00%n", amountBanknotes, banknoteValue);
    }
}