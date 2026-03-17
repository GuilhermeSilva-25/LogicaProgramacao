import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String... args) {
        Locale.setDefault(Locale.US);
        try (Scanner input = new Scanner(System.in)) {
            double sumOfGrades = 0;
            int counter = 0;
            while (counter < 2) {
                double grade = input.nextDouble();

                if (grade >= 0 && grade <= 10) {
                    sumOfGrades += grade;
                    counter++;
                } else {
                    System.out.println("nota invalida");
                }
            }
            System.out.printf("media = %.2f%n", sumOfGrades / 2);
        }
    }
}