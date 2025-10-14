import java.util.Scanner;
import java.util.Locale;

public class Main {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner input = new Scanner(System.in)) {
            int totalDistanceTraveled = input.nextInt();
            double totalFuelUsed = input.nextDouble();
            double averageCarConsumption = calculateAverageCarConsumption(totalDistanceTraveled, totalFuelUsed);
            System.out.printf("%.3f km/l\n", averageCarConsumption);
        }
    }

    public static double calculateAverageCarConsumption(int distance, double fuel) {
        return distance / fuel;
    }
}