import java.util.Scanner;

public class Main {
    public static final int TOTAL_HOURS_IN_A_DAY = 24;

    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int startTime = input.nextInt();
            int finalTime = input.nextInt();
            int gameDuration = calculateGameDuration(startTime, finalTime);
            System.out.printf("O JOGO DUROU %d HORA(S)\n", gameDuration);
        }
    }

    public static int calculateGameDuration(int startTime, int finalTime) {
        if (startTime > finalTime) {
            return (finalTime + TOTAL_HOURS_IN_A_DAY) - startTime;
        } else if (startTime == finalTime) {
            return TOTAL_HOURS_IN_A_DAY;
        } else {
            return finalTime - startTime;
        }
    }
}