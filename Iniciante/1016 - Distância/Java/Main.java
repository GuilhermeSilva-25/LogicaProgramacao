import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int distance = input.nextInt();
            int time = calculateTime(distance);
            System.out.printf("%d minutos%n", time);
        }
    }

    public static int calculateTime(int distance) {
        final int TIME_PER_KILOMETER = 2;
        return distance * TIME_PER_KILOMETER;
    }
}