import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner input = new Scanner(System.in)) {
            int numberOfAges = 0;
            int sumOfAges = 0;

            while (true) {
                int age = input.nextInt();

                if (age < 0) {
                    break;
                }

                numberOfAges++;
                sumOfAges += age;
            }

            // if (numberOfAges > 0)
            double averageAges = ((double) sumOfAges / numberOfAges);
            System.out.printf("%.2f%n", averageAges);
        }
    }
}