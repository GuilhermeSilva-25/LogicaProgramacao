import java.util.Scanner;
import java.util.Locale;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner input = new Scanner(System.in)) {
            int hoursSpentTraveling = input.nextInt();
            int averageSpeed = input.nextInt();
            double fuelRequired = calculateFuelRequired(hoursSpentTraveling, averageSpeed);
            System.out.printf("%.3f\n", fuelRequired);
        }
    }

    public static double calculateFuelRequired(int hoursSpentTraveling, int averageSpeed) {
        final double KILOMETERS_PER_LITER = 12.0;
        return (hoursSpentTraveling * averageSpeed) / KILOMETERS_PER_LITER;
    }
}