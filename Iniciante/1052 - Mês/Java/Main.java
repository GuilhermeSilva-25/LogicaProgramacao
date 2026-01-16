import java.util.Scanner;
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int value = input.nextInt();
            Map<Integer, String> months = createCalendar();
            String month = identifyMonth(value, months);
            System.out.println(month);
        }
    }

    public static Map<Integer, String> createCalendar() {
        Map<Integer, String> months = new HashMap<>();

        months.put(1, "January");
        months.put(2, "February");
        months.put(3, "March");
        months.put(4, "April");
        months.put(5, "May");
        months.put(6, "June");
        months.put(7, "July");
        months.put(8, "August");
        months.put(9, "September");
        months.put(10, "October");
        months.put(11, "November");
        months.put(12, "December");

        return months;
    }

    public static String identifyMonth(int value, Map<Integer, String> months) {
        return months.get(value);
    }
}