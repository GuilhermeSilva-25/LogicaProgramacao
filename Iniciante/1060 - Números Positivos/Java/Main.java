import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner input = new Scanner(System.in)) {
            int positiveValues = 0;
            for (int i = 1; i <= 6; i++) {
                double value = input.nextDouble();
                if (value > 0) {
                    positiveValues++;
                }
            }
            System.out.printf("%d valores positivos\n", positiveValues);
        }
    }
}