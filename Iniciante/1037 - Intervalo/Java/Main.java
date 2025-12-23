import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner input = new Scanner(System.in)) {
            double value = input.nextDouble();
            String interval = selectRange(value);
            System.out.println(interval);
        }
    }

    public static String selectRange(double value) {
        if (value < 0 || value > 100) {
            return "Fora de intervalo";
        } else if (value >= 0 && value <= 25) {
            return "Intervalo [0,25]";
        } else if (value <= 50) {
            return "Intervalo (25,50]";
        } else if (value <= 75) {
            return "Intervalo (50,75]";
        } else {
            return "Intervalo (75,100]";
        }
    }
}