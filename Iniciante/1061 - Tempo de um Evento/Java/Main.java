import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static final int SECONDS_IN_A_DAY = 86400;
    public static final int SECONDS_IN_AN_HOUR = 3600;
    public static final int SECONDS_IN_A_MINUTE = 60;

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        try (Scanner input = new Scanner(System.in)) {
            input.next();
            int startDay = input.nextInt();
            int startHour = input.nextInt();
            input.next();
            int startMinute = input.nextInt();
            input.next();
            int startSecond = input.nextInt();
            input.next();
            int endDay = input.nextInt();
            int endHour = input.nextInt();
            input.next();
            int endMinute = input.nextInt();
            input.next();
            int endSecond = input.nextInt();
            int[] eventDuration = calculateEventDuration(startDay, startHour, startMinute, startSecond, endDay, endHour,
                    endMinute, endSecond);

            System.out.printf("%d dia(s)\n%d hora(s)\n%d minuto(s)\n%d segundo(s)\n", eventDuration[0],
                    eventDuration[1], eventDuration[2], eventDuration[3]);
        }
    }

    public static int[] calculateEventDuration(int startDay, int startHour, int startMinute, int startSecond,
            int endDay, int endHour, int endMinute, int endSecond) {
        int start = (startDay * SECONDS_IN_A_DAY) + (startHour * SECONDS_IN_AN_HOUR)
                + (startMinute * SECONDS_IN_A_MINUTE)
                + startSecond;
        int end = (endDay * SECONDS_IN_A_DAY) + (endHour * SECONDS_IN_AN_HOUR) + (endMinute * SECONDS_IN_A_MINUTE)
                + endSecond;
        int durationInSeconds = end - start;

        if (durationInSeconds <= 0) {
            durationInSeconds += SECONDS_IN_A_DAY;
        }

        return convertTime(durationInSeconds);

    }

    public static int[] convertTime(int durationInSeconds) {
        int day = durationInSeconds / SECONDS_IN_A_DAY;
        int leftoverTime = durationInSeconds % SECONDS_IN_A_DAY;
        int hour = leftoverTime / SECONDS_IN_AN_HOUR;
        leftoverTime %= SECONDS_IN_AN_HOUR;
        int minute = leftoverTime / SECONDS_IN_A_MINUTE;
        int second = leftoverTime % SECONDS_IN_A_MINUTE;

        return new int[] { day, hour, minute, second };
    }
}