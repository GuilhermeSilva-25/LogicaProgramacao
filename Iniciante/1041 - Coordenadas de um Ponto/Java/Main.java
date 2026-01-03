import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner input = new Scanner(System.in)) {
            double x = input.nextDouble();
            double y = input.nextDouble();
            String quadrantStatus = checkQuadrantStatus(x, y);
            System.out.println(quadrantStatus);
        }
    }

    public static String checkQuadrantStatus(double x, double y) {
        if (x == 0 && y == 0) {
            return "Origem";
        } else if (x == 0) {
            return "Eixo Y";
        } else if (y == 0) {
            return "Eixo X";
        } else if (x > 0 && y > 0) {
            return "Q1";
        } else if (x < 0 && y > 0) {
            return "Q2";
        } else if (x < 0 && y < 0) {
            return "Q3";
        } else {
            return "Q4";
        }
    }
}