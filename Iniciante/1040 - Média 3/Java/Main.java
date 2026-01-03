import java.util.Locale;
import java.util.Scanner;

public class Main {
    private static final int[] WEIGHTS = {2, 3, 4, 1};

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner input = new Scanner(System.in)) {
            double[] grades = new double[4];
            for (int i = 0; i < 4; i++) {
                grades[i] = input.nextDouble();
            }

            double average = calculateWeightedAverage(grades);
            average = Math.floor(average * 10) / 10.0;
            
            System.out.printf("Media: %.1f%n", average);

            checkStudentStatus(average, input);
        }
    }

    public static void checkStudentStatus(double average, Scanner input) {
        if (average >= 7.0) {
            System.out.println("Aluno aprovado.");
        } else if (average < 5.0) {
            System.out.println("Aluno reprovado.");
        } else {
            System.out.println("Aluno em exame.");
            handleExam(average, input);
        }
    }

    public static void handleExam(double initialAverage, Scanner input) {
        double examGrade = input.nextDouble();
        System.out.printf("Nota do exame: %.1f%n", examGrade);
        
        double finalAverage = (initialAverage + examGrade) / 2.0;
        
        if (finalAverage >= 5.0) {
            System.out.println("Aluno aprovado.");
        } else {
            System.out.println("Aluno reprovado.");
        }
        
        System.out.printf("Media final: %.1f%n", finalAverage);
    }

    public static double calculateWeightedAverage(double[] grades) {
        double sum = 0.0;
        double totalWeight = 0.0;

        for (int i = 0; i < grades.length; i++) {
            sum += grades[i] * WEIGHTS[i];
            totalWeight += WEIGHTS[i];
        }

        return sum / totalWeight;
    }
}