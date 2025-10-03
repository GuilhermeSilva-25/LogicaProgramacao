import java.util.Scanner;
import java.util.Locale;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner sc = new Scanner(System.in)) {
            int employeeNumber = sc.nextInt();
            int hoursWorked = sc.nextInt();
            double hourlyRate = sc.nextDouble();
            double wage = hoursWorked * hourlyRate;
            System.out.printf("NUMBER = %d%nSALARY = U$ %.2f%n", employeeNumber, wage);
        }
    }
}