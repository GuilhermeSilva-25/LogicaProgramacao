import java.util.Locale;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        for (int k = 0; k <= 10; k++) {
            double i = k * 0.2;
            for (int j = 1; j <= 3; j++) {
                double valueJ = j + i;
                if (i == 0 || i == 1 || i == 2) {
                    System.out.printf("I=%.0f J=%.0f%n", i, valueJ);
                } else {
                    System.out.printf("I=%.1f J=%.1f%n", i, valueJ);
                }
            }
        }
    }
}