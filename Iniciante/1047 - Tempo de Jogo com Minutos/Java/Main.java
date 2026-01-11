import java.util.Scanner;

public class Main {
    public static final int TOTAL_MINUTES_IN_A_HOUR = 60;
    public static final int TOTAL_MINUTES_IN_A_DAY = 1440;

    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int startHour = input.nextInt();
            int startMinute = input.nextInt();
            int finalHour = input.nextInt();
            int finalMinute = input.nextInt();

            int[] gameDuration = calculateGameDuration(startHour, startMinute, finalHour, finalMinute);

            System.out.printf("O JOGO DUROU %d HORA(S) E %d MINUTO(S)\n", gameDuration[0], gameDuration[1]);
        }
    }

    public static int[] calculateGameDuration(int startHour, int startMinute, int finalHour, int finalMinute) {
        int startTotalMinutes = (startHour * TOTAL_MINUTES_IN_A_HOUR) + startMinute;
        int endTotalMinutes = (finalHour * TOTAL_MINUTES_IN_A_HOUR) + finalMinute;

        int durationInMinutes = endTotalMinutes - startTotalMinutes;

        if (durationInMinutes <= 0) {
            durationInMinutes += TOTAL_MINUTES_IN_A_DAY;
        }

        return convertTime(durationInMinutes);
    }

    public static int[] convertTime(int time) {
        int hour = time / TOTAL_MINUTES_IN_A_HOUR;
        int minutes = time % TOTAL_MINUTES_IN_A_HOUR;

        return new int[] { hour, minutes };
    }
}