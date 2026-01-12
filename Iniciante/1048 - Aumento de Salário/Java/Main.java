import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static final double[] PERCENTAGE_OF_READJUSTMENT = {.15, .12, .10, .07, .04};
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner input = new Scanner(System.in)) {
            double salary = input.nextDouble();
            double readjustment = defineReadjustmentPercentage(salary);
            double salaryIncrease = salary * readjustment;
            double newSalary = salary + salaryIncrease;
            print(readjustment, salaryIncrease, newSalary);
        }
    }

    public static double defineReadjustmentPercentage(double salary) {
        if (salary <= 400.00) {
            return PERCENTAGE_OF_READJUSTMENT[0];
        } else if (salary <= 800.00) {
            return PERCENTAGE_OF_READJUSTMENT[1];
        } else if (salary <= 1200.00) {
            return PERCENTAGE_OF_READJUSTMENT[2];
        } else if (salary <= 2000.00) {
            return PERCENTAGE_OF_READJUSTMENT[3];
        } else {
            return PERCENTAGE_OF_READJUSTMENT[4];
        }
    }

    public static void print(double readjustment, double salaryIncrease, double newSalary) {
        System.out.printf("Novo salario: %.2f\n", newSalary);
        System.out.printf("Reajuste ganho: %.2f\n", salaryIncrease);
        System.out.printf("Em percentual: %.0f %%\n", readjustment * 100);
    }
}