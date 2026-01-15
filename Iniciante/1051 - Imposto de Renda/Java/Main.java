import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner input = new Scanner(System.in)) {
            double salary = input.nextDouble();
            double valueIncomeTax = calculateIncomeTax(salary);
            print(valueIncomeTax);
        }
    }

    private static double calculateIncomeTax(double salary) {
        double tax = 0.0;

        if (salary > 4500.00) {
            tax += (salary - 4500.00) * 0.28;
            salary = 4500.00;
        }

        if (salary > 3000.00) {
            tax += (salary - 3000.00) * 0.18;
            salary = 3000.00;
        }

        if (salary > 2000.00) {
            tax += (salary - 2000.00) * 0.08;
        }

        return tax;
    }

    private static void print(double valueIncomeTax) {
        if (valueIncomeTax == 0.0) {
            System.out.println("Isento");
        } else {
            System.out.printf("R$ %.2f%n", valueIncomeTax);
        }
    }
}