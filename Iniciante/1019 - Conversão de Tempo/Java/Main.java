import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int durationInSeconds = input.nextInt();
            String convertedTime = convertTime(durationInSeconds);
            System.out.println(convertedTime);
        }
    }

    public static String convertTime(int durationInSeconds) {
        final int SECONDS_IN_HOUR = 3600;
        final int SECONDS_IN_MINUTE = 60;
        int remainingSeconds = durationInSeconds;
        int hours = remainingSeconds / SECONDS_IN_HOUR;
        remainingSeconds = remainingSeconds % SECONDS_IN_HOUR;
        int minutes = remainingSeconds / SECONDS_IN_MINUTE;
        int seconds = remainingSeconds % SECONDS_IN_MINUTE;
        return String.format("%d:%d:%d", hours, minutes, seconds);
    }
}