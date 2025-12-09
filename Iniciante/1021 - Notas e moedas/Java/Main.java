import java.util.Scanner;
import java.util.Locale;

public class Main {
    private static final int[] BANKNOTES_LIST = { 10000, 5000, 2000, 1000, 500, 200 };
    private static final int[] COINS_LIST = { 100, 50, 25, 10, 5, 1 };

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner input = new Scanner(System.in)) {
            double value = input.nextDouble();
            int totalCents = (int) Math.round(value * 100);
            int remainingCents = calculateBanknotes(totalCents);
            calculateCoins(remainingCents);
        }
    }

    public static int calculateBanknotes(int totalCents) {
        System.out.println("NOTAS:");
        for (int banknote : BANKNOTES_LIST) {
            int amountBanknotes = totalCents / banknote;
            printQuantityBanknotes(amountBanknotes, (banknote / 100));
            totalCents %= banknote;
        }
        return totalCents;
    }

    public static void calculateCoins(int totalCents) {
        System.out.println("MOEDAS:");
        for (int coin : COINS_LIST) {
            int amountCoins = totalCents / coin;
            printQuantityCoins(amountCoins, (coin / 100.0));
            totalCents %= coin;
        }
    }

    public static void printQuantityBanknotes(int amountBanknotes, double banknote) {
        System.out.printf("%d nota(s) de R$ %.2f%n", amountBanknotes, banknote);
    }

    public static void printQuantityCoins(int amountCoins, double coin) {
        System.out.printf("%d moeda(s) de R$ %.2f%n", amountCoins, coin);
    }
}