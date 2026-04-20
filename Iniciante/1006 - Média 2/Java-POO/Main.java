import java.util.Scanner;
import java.util.Locale;

record CourseEvaluation(double gradeA, double gradeB, double gradeC) {
    private static final double WEIGHT_A = 2.0;
    private static final double WEIGHT_B = 3.0;
    private static final double WEIGHT_C = 5.0;

    public double calculateAverage() {
        double sumWeights = WEIGHT_A + WEIGHT_B + WEIGHT_C;
        return (gradeA * WEIGHT_A + gradeB * WEIGHT_B + gradeC * WEIGHT_C) / sumWeights;
    }
}

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (var input = new Scanner(System.in)) {
            var gradeA = input.nextDouble();
            var gradeB = input.nextDouble();
            var gradeC = input.nextDouble();

            var evaluation = new CourseEvaluation(gradeA, gradeB, gradeC);

            System.out.printf("MEDIA = %.1f%n", evaluation.calculateAverage());
        }
    }
}