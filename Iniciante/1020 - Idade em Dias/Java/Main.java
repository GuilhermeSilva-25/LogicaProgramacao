import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int ageInDays = input.nextInt();
            String convertedTime = convertTime(ageInDays);
            System.out.println(convertedTime);
        }
    }

    public static String convertTime(int ageInDays) {
        final int DAYS_IN_A_YEAR = 365;
        final int DAYS_IN_A_MONTH = 30;
        int remainingDays = ageInDays;
        int years = remainingDays / DAYS_IN_A_YEAR;
        remainingDays = remainingDays % DAYS_IN_A_YEAR;
        int months = remainingDays / DAYS_IN_A_MONTH;
        int days = remainingDays % DAYS_IN_A_MONTH;
        return String.format("%d ano(s)%n%d mes(es)%n%d dia(s)", years, months, days);
    }
}