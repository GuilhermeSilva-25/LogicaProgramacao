import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String... args) {
        Locale.setDefault(Locale.US);
        try (Scanner input = new Scanner(System.in)) {
            int n = input.nextInt();
            int totalGuineaPigs = 0;
            int totalRabbits = 0;
            int totalRats = 0;
            int totalFrogs = 0;

            for (int i = 0; i < n; i++) {
                int number = input.nextInt();
                char letter = input.next().charAt(0);

                totalGuineaPigs += number;

                switch (letter) {
                    case 'C' -> totalRabbits += number;
                    case 'R' -> totalRats += number;
                    case 'S' -> totalFrogs += number;
                }
            }
            double percentageRabbits = (double) totalRabbits / totalGuineaPigs * 100;
            double percentageRats = (double) totalRats / totalGuineaPigs * 100;
            double percentageFrogs = (double) totalFrogs / totalGuineaPigs * 100;

            System.out.printf("Total: %d cobaias\n", totalGuineaPigs);
            System.out.printf("Total de coelhos: %d\n", totalRabbits);
            System.out.printf("Total de ratos: %d\n", totalRats);
            System.out.printf("Total de sapos: %d\n", totalFrogs);
            System.out.printf("Percentual de coelhos: %.2f %%\n", percentageRabbits);
            System.out.printf("Percentual de ratos: %.2f %%\n", percentageRats);
            System.out.printf("Percentual de sapos: %.2f %%\n", percentageFrogs);

        }
    }
}